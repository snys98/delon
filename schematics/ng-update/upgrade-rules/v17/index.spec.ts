import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { tryAddFile } from '../../../utils';
import { createAlainApp, migrationCollection } from '../../../utils/testing';

describe('Schematic: ng-update: v17Rule', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const logs: string[] = [];
  const jsonSchemaModulePath = '/projects/foo/src/app/shared/json-schema/json-schema.module.ts';

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
    if (!tree.exists(jsonSchemaModulePath)) {
      tree.create(
        jsonSchemaModulePath,
        `import { NgModule } from '@angular/core';
    import { DelonFormModule, WidgetRegistry } from '@delon/form';

    import { TestWidget } from './test/test.widget';
    import { SharedModule } from '../shared.module';

    export const SCHEMA_THIRDS_COMPONENTS = [TestWidget];

    @NgModule({
      declarations: SCHEMA_THIRDS_COMPONENTS,
      imports: [SharedModule, DelonFormModule.forRoot()],
      exports: SCHEMA_THIRDS_COMPONENTS
    })
    export class JsonSchemaModule {
      constructor(widgetRegistry: WidgetRegistry) {
        widgetRegistry.register(TestWidget.KEY, TestWidget);
      }
    }
    `
      );
    }
  });

  async function runMigration(): Promise<void> {
    logs.length = 0;
    runner = new SchematicTestRunner('schematics', migrationCollection);
    runner.logger.subscribe(e => logs.push(e.message));
    await runner.runSchematic('migration-v17', {}, tree);
  }

  it('should be working', async () => {
    await runMigration();
    const content = tree.readContent(jsonSchemaModulePath);
    expect(content).toContain(`import { UploadWidgetModule } from '@delon/form/widgets/upload';`);
    expect(content).toContain(`, UploadWidgetModule`);
  });

  it('#removeForRoot', async () => {
    const globalConfigPath = '/projects/foo/src/app/global-config.module.ts';
    tryAddFile(
      tree,
      globalConfigPath,
      `
    import { AlainThemeModule } from '@delon/theme';
    const alainModules: any[] = [AlainThemeModule.forRoot(), DelonACLModule.forRoot()];
    `
    );
    await runMigration();
    const content = tree.readContent(globalConfigPath);
    expect(content).not.toContain(`AlainThemeModule.forRoot()`);
    expect(content).not.toContain(`DelonACLModule.forRoot()`);
  });

  it('#replaceProvideAlainConfig', async () => {
    const globalConfigPath = '/projects/foo/src/app/global-config.module.ts';
    tryAddFile(tree, globalConfigPath, `const alainProvides = [{ provide: ALAIN_CONFIG, useValue: alainConfig }];`);
    await runMigration();
    const content = tree.readContent(globalConfigPath);
    expect(content).toContain(`provideAlainConfig(alainConfig)`);
  });

  it('#preloader', async () => {
    const appCompPath = '/projects/foo/src/app/app.component.ts';
    tryAddFile(
      tree,
      appCompPath,
      `import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { TitleService, VERSION as VERSION_ALAIN } from '@delon/theme';
import { environment } from '@env/environment';
import { NzModalService } from 'ng-zorro-antd/modal';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';

@Component({
  selector: 'app-root',
})
export class AppComponent implements OnInit {
  constructor(
    el: ElementRef,
    renderer: Renderer2,
    private router: Router,
    private titleSrv: TitleService,
    private modalSrv: NzModalService
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-alain-version', VERSION_ALAIN.full);
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);
  }

  ngOnInit(): void {
    let configLoad = false;
    this.router.events.subscribe(ev => {
      if (ev instanceof RouteConfigLoadStart) {
        configLoad = true;
      }
      if (ev instanceof NavigationEnd) {
        this.titleSrv.setTitle();
        this.modalSrv.closeAll();
      }
    });
  }
}
`
    );
    await runMigration();
    const content = tree.readContent(appCompPath);
    expect(content).toContain(`private donePreloader = stepPreloader();`);
    expect(content).toContain(`this.donePreloader();`);
  });
});
