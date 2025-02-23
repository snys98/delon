## [11.10.3](https://github.com/ng-alain/delon/compare/11.10.2...11.10.3) (2021-06-22)


### Bug Fixes

* **chart:** remove empty theme variable ([#1257](https://github.com/ng-alain/delon/issues/1257)) ([c0a7c01](https://github.com/ng-alain/delon/commit/c0a7c01792bfe5ff47d95febf6893e2008ac2498))
* **chart:echarts:** fix can't percentage of width ([#1261](https://github.com/ng-alain/delon/issues/1261)) ([aeb5d6f](https://github.com/ng-alain/delon/commit/aeb5d6f97996ee3f74ff6ed3a6964a7d5399ff69))
* **form:** fix should be triggered `reset` every time when can be displayed ([#1260](https://github.com/ng-alain/delon/issues/1260)) ([10431c0](https://github.com/ng-alain/delon/commit/10431c005faea81e8943b9681d6f67fb936f9008))



## [11.10.2](https://github.com/ng-alain/delon/compare/11.10.1...11.10.2) (2021-05-26)


### Bug Fixes

* **cli:** fix .template suffix should be remove ([#1252](https://github.com/ng-alain/delon/issues/1252)) ([296b4f4](https://github.com/ng-alain/delon/commit/296b4f46e1b412a47ba5e998eabacb3953ccbccb))
* **form:widget:time:** fix `minuteStep` param name ([#1249](https://github.com/ng-alain/delon/issues/1249)) ([2c36c11](https://github.com/ng-alain/delon/commit/2c36c1107f3e49f7a2dab834728ba4e3976cc0af))
* **theme:theme-btn:** fix Failed to execute 'removeChild' on 'Node' ([#1250](https://github.com/ng-alain/delon/issues/1250)) ([73017f5](https://github.com/ng-alain/delon/commit/73017f5778364179361245fdc1d53c87e9901522))



## [11.10.1](https://github.com/ng-alain/delon/compare/11.10.0...11.10.1) (2021-05-09)


### Bug Fixes

* **abc:st:** fix invalid `exported` in excel export ([#1247](https://github.com/ng-alain/delon/issues/1247)) ([e7fa69b](https://github.com/ng-alain/delon/commit/e7fa69bc0ed6399682433fdbad44f4e55c60e61c))
* **auth:** catch the error when check jwt token ([#1244](https://github.com/ng-alain/delon/issues/1244)) ([faf2e90](https://github.com/ng-alain/delon/commit/faf2e9031d80c54ae7db5f0b8eab9068f3e72e0d))
* **cli:** fix excess `allowedCommonJsDependencies` ([#1243](https://github.com/ng-alain/delon/issues/1243)) ([b1bc537](https://github.com/ng-alain/delon/commit/b1bc5372a5a52e6e1285c897abe4aa48b146cc86))


### Features

* **abc:st:** support `dateFormat` of global config ([#1246](https://github.com/ng-alain/delon/issues/1246)) ([76f97e4](https://github.com/ng-alain/delon/commit/76f97e4baf33aca1011ef517afa468caf85aa9fc))



# [11.10.0](https://github.com/ng-alain/delon/compare/11.9.0...11.10.0) (2021-04-23)


### Bug Fixes

* **abc:reuse-tab:** support ssr ([#1232](https://github.com/ng-alain/delon/issues/1232)) ([4933deb](https://github.com/ng-alain/delon/commit/4933deb64cc6211cd25e6276044cf46647a0bdef))
* **abc:st:** fix mutual pollution of `expand` and `click` event ([#1241](https://github.com/ng-alain/delon/issues/1241)) ([0321613](https://github.com/ng-alain/delon/commit/0321613db04b16c255be2fdf22869456d9556fc7))
* **form:** fix losing format rules of ajv in 7.x version ([#1239](https://github.com/ng-alain/delon/issues/1239)) ([393f0a3](https://github.com/ng-alain/delon/commit/393f0a3a741925ac4f113a2f7cc230e7570783ec))


### Features

* **abc:st:** add `customRequest` property ([#1234](https://github.com/ng-alain/delon/issues/1234)) ([65aba5c](https://github.com/ng-alain/delon/commit/65aba5c04eed8378fac95e1617ad2bca29e5ffdc))
* **abc:st:** add `safeHtml` property in `STColumn` ([#1233](https://github.com/ng-alain/delon/issues/1233)) ([f49d45c](https://github.com/ng-alain/delon/commit/f49d45c99fffcf4bd7f08cbc1f89870432702fd0))
* **chart:echarts:** add `chart-echarts` component ([#1238](https://github.com/ng-alain/delon/issues/1238)) ([ce04327](https://github.com/ng-alain/delon/commit/ce0432742649a2e375793720146ddfbf9df158f4))
* **form:** Upgrade `ajv` to `8.x` ([#1240](https://github.com/ng-alain/delon/issues/1240)) ([9b9f3c8](https://github.com/ng-alain/delon/commit/9b9f3c817ed61ee7ce15d9aff8d04d09867ebe0a))


### Performance Improvements

* **chart:*:** silky change data ([#1237](https://github.com/ng-alain/delon/issues/1237)) ([24069bf](https://github.com/ng-alain/delon/commit/24069bf65cafaf5348e4a7f236e921451eaef788))



# [11.9.0](https://github.com/ng-alain/delon/compare/11.8.1...11.9.0) (2021-04-09)


### Bug Fixes

* **acl:** keeping pure lib ([#1229](https://github.com/ng-alain/delon/issues/1229)) ([3e79ad2](https://github.com/ng-alain/delon/commit/3e79ad238aa35eb2733a61923594805b7f30ee96))
* **theme:theme-btn:** optimize Keys of storage ([#1224](https://github.com/ng-alain/delon/issues/1224)) ([8a40157](https://github.com/ng-alain/delon/commit/8a401578b12a281b90ceb00b481bcef239825e6a))


### Features

* **abc:pdf:** add `loading` of pdf file loading ([#1228](https://github.com/ng-alain/delon/issues/1228)) ([b4effc5](https://github.com/ng-alain/delon/commit/b4effc5552864d79d7320dab151053b97cc9dbef))
* **util:currency:** add ingoreZeroPrecision property ([#1222](https://github.com/ng-alain/delon/issues/1222)) ([dd10674](https://github.com/ng-alain/delon/commit/dd10674311283a9a4643457ad1e2003be98139bd))
* **util:CurrencyService:** add support angular `currency` pipe render type ([#1230](https://github.com/ng-alain/delon/issues/1230)) ([7a6c329](https://github.com/ng-alain/delon/commit/7a6c32998dcbb62a3b100214eb234032411ab223))



## [11.8.1](https://github.com/ng-alain/delon/compare/11.8.0...11.8.1) (2021-03-17)


### Bug Fixes

* **abc:pdf:** fix selection content is misplaced ([#1220](https://github.com/ng-alain/delon/issues/1220)) ([d9fd20f](https://github.com/ng-alain/delon/commit/d9fd20f30edfb34f38dc57a478a1fcd4b419de63))
* **abc:st:** fix avoid dirty button of `iif` ([#1219](https://github.com/ng-alain/delon/issues/1219)) ([7ae25d2](https://github.com/ng-alain/delon/commit/7ae25d2afa4452a9d58d31eff141df05853496de))
* **abc:st:** fix style misalignment in small screen ([#1218](https://github.com/ng-alain/delon/issues/1218)) ([4a3f461](https://github.com/ng-alain/delon/commit/4a3f461ce6a2d5234c2620a3a4f3cc222d0cd588))
* import date-fns by esm ([#1217](https://github.com/ng-alain/delon/issues/1217)) ([36b172c](https://github.com/ng-alain/delon/commit/36b172ccdc49146c131c6d403a866fdac074e539))
* **form:** fix invalid parament in error string ([#1215](https://github.com/ng-alain/delon/issues/1215)) ([df0aeb1](https://github.com/ng-alain/delon/commit/df0aeb1239f0b8417119b855a49012bf0a6e9ff6))



# [11.8.0](https://github.com/ng-alain/delon/compare/11.7.1...11.8.0) (2021-03-13)


### Bug Fixes

* fix can't auto import when ng-zorro-antd not in package.json ([#1213](https://github.com/ng-alain/delon/issues/1213)) ([cfe6d6e](https://github.com/ng-alain/delon/commit/cfe6d6e136ff8eec69d86396efbe53e997507aef))
* **abc:st:** fix always fixed column in group header ([#1204](https://github.com/ng-alain/delon/issues/1204)) ([4509b17](https://github.com/ng-alain/delon/commit/4509b174f4b318a547c976ce6f19811eccd60391))
* **abc:st:** fix style misalignment in small screen when set scroll ([#1208](https://github.com/ng-alain/delon/issues/1208)) ([2fb3ac6](https://github.com/ng-alain/delon/commit/2fb3ac69500aa1f1503335ee519b04d507143826))
* **form:** fix stack error when `enum` is large data ([#1209](https://github.com/ng-alain/delon/issues/1209)) ([6a90822](https://github.com/ng-alain/delon/commit/6a908220051d586a4e3bf74a9f4229ef1b0730b5))
* **module:onboarding:** fix closed mask when click target element ([#1202](https://github.com/ng-alain/delon/issues/1202)) ([b741b4c](https://github.com/ng-alain/delon/commit/b741b4c9ba34f1d590fc00f1db071971479ed24a))
* **sf:widget:select:** fix invalid `showSearch` ([#1212](https://github.com/ng-alain/delon/issues/1212)) ([827d6f5](https://github.com/ng-alain/delon/commit/827d6f5d533c56844c1d34a088b61b986a8f5060))
* **theme:_HttpClient:** fix ExpressionChangedAfterItHasBeenCheckedError of loading ([#1211](https://github.com/ng-alain/delon/issues/1211)) ([ffebaf8](https://github.com/ng-alain/delon/commit/ffebaf863a2cdb8b600fb80d0f8ae3f6d79ff9b9))


### Features

* optimize Keys configurable ([#1210](https://github.com/ng-alain/delon/issues/1210)) ([5aea948](https://github.com/ng-alain/delon/commit/5aea94847278d3ce1863f1f1a572bb914923bf9a))
* **theme:layout-default:** add `hideAside`, `logoLink`, `logoFixWidth` of `options` ([#1206](https://github.com/ng-alain/delon/issues/1206)) ([3cfadc3](https://github.com/ng-alain/delon/commit/3cfadc3be9ed7e1111bd297f11ddd2773663d873))
* **theme:SettingsService:** support generic ([#1207](https://github.com/ng-alain/delon/issues/1207)) ([c2532f8](https://github.com/ng-alain/delon/commit/c2532f8d0eb69d91d0d755c2fc2aaf01659105d7))
* **util:** add `ZoneOutside`, `ZoneRun` decorator ([#1198](https://github.com/ng-alain/delon/issues/1198)) ([770906c](https://github.com/ng-alain/delon/commit/770906ccac27da8e7d68a392744e5e455939a361))


### Performance Improvements

* **abc:st:** optimize the button text performance of rendered ([#1203](https://github.com/ng-alain/delon/issues/1203)) ([b480649](https://github.com/ng-alain/delon/commit/b480649137ac6041bd253a49e36d321cc08642c2))



## [11.7.1](https://github.com/ng-alain/delon/compare/11.7.0...11.7.1) (2021-03-06)


### Bug Fixes

* **chart:mini-area,mini-bar:** fix offset when tooltipType is 'mini' ([#1200](https://github.com/ng-alain/delon/issues/1200)) ([5524c35](https://github.com/ng-alain/delon/commit/5524c359392a5e2fdf446512271ff03b09890477))
* **sf:** fix can't compile in `strict` of ajv ([#1197](https://github.com/ng-alain/delon/issues/1197)) ([acb59a3](https://github.com/ng-alain/delon/commit/acb59a3cf77d94df230bf4c58fa3c538802ee8ef))


### Performance Improvements

* **module:*:** coerces `number` or `boolean` type in `strictTemplates` ([#1196](https://github.com/ng-alain/delon/issues/1196)) ([ead34da](https://github.com/ng-alain/delon/commit/ead34da6054ad042cc7c1b5068ed005bd6379b14))



# [11.7.0](https://github.com/ng-alain/delon/compare/11.6.0...11.7.0) (2021-02-27)


### Bug Fixes

* **abc:st:** fix `columns` can't be re-specified when call export Excel ([#1181](https://github.com/ng-alain/delon/issues/1181)) ([50baea3](https://github.com/ng-alain/delon/commit/50baea3df93e94cbc674d007de7e824992aabaec))
* **abc:st:** fix data should be converted ([#1180](https://github.com/ng-alain/delon/issues/1180)) ([f800e66](https://github.com/ng-alain/delon/commit/f800e66af62712a7a06443479befda78639dfab1))
* **abc:theme:i18n:** fix losing `defaultLang`, `currentLang` in `AlainI18NService` ([#1183](https://github.com/ng-alain/delon/issues/1183)) ([f65cb6b](https://github.com/ng-alain/delon/commit/f65cb6bd54b4ffaba8f2a90bb73b1449da861be0))
* **chart:trend:** fix data flag of html attribute ([#1174](https://github.com/ng-alain/delon/issues/1174)) ([3a10bf3](https://github.com/ng-alain/delon/commit/3a10bf354375701ea70a90b2a760531c46135f01))
* **form:** fix losing for ([#1144](https://github.com/ng-alain/delon/issues/1144)) ([e0ffa64](https://github.com/ng-alain/delon/commit/e0ffa64d3621b37458b460fbf9953e1bf9a1d1fd))
* **form:widget:date:** fix invalid default value when mode is `range` ([#1185](https://github.com/ng-alain/delon/issues/1185)) ([d14a823](https://github.com/ng-alain/delon/commit/d14a8234f747c26e01b680e6d109b91071b5f3f4))
* **theme:** fix less4 ([#1172](https://github.com/ng-alain/delon/issues/1172)) ([5e272c1](https://github.com/ng-alain/delon/commit/5e272c13739d71e3cc4c479440eafd5ac61ef7a7))
* **theme:layout-default:** fix disabled default nav when `nav` is spe… ([#1193](https://github.com/ng-alain/delon/issues/1193)) ([38e60f5](https://github.com/ng-alain/delon/commit/38e60f5d2f010c9fb6000795f703107cb6a0035c))
* **util:ArrayService:** fix cancel return readonly of `flat`, `uniq` ([#1171](https://github.com/ng-alain/delon/issues/1171)) ([7375cdf](https://github.com/ng-alain/delon/commit/7375cdfb35a1d0b4489216a46d29fbb626f69265))


### Features

* **abc:_src:** add `previewSrc` property ([#1173](https://github.com/ng-alain/delon/issues/1173)) ([ffa3b63](https://github.com/ng-alain/delon/commit/ffa3b63f522c1b41f35ffb624cee9faa80e24ae5))
* **abc:_src:** BREAKING CHANGES: deprecated component ([#1177](https://github.com/ng-alain/delon/issues/1177)) ([492884f](https://github.com/ng-alain/delon/commit/492884f9f253fea3b1f1b53928cb0fdedeb4bd6c))
* **abc:let:** add `let` directive ([#1187](https://github.com/ng-alain/delon/issues/1187)) ([9c4397b](https://github.com/ng-alain/delon/commit/9c4397b579aaf606f3abc6d09b9c4e5e64b4e133))
* **abc:reuse-tab:** add `disabled` property ([#1179](https://github.com/ng-alain/delon/issues/1179)) ([2d2014f](https://github.com/ng-alain/delon/commit/2d2014f97cb5b85e758c985bcae53be88ee0a310))
* **abc:reuse-tab:** add `titleRender` property ([#1186](https://github.com/ng-alain/delon/issues/1186)) ([5df3c61](https://github.com/ng-alain/delon/commit/5df3c6113a12d4fc96b9d312440c169d5999b815))
* **abc:theme:** add environment type ([#1182](https://github.com/ng-alain/delon/issues/1182)) ([4e1c432](https://github.com/ng-alain/delon/commit/4e1c432b5844494bb4996fe69595816b1dbe50cb))
* **form:** Upgrade `ajv` to `7.x` ([#1188](https://github.com/ng-alain/delon/issues/1188)) ([431d540](https://github.com/ng-alain/delon/commit/431d540d3f5169b36222697c83edbcff6de55220))
* **mock:** add `setData` in `MockService` ([#1190](https://github.com/ng-alain/delon/issues/1190)) ([a118a07](https://github.com/ng-alain/delon/commit/a118a07f5d5275e859d4ea425f8c39bbff90e6b5))
* add `strictTemplates` ([#1184](https://github.com/ng-alain/delon/issues/1184)) ([c4cfd44](https://github.com/ng-alain/delon/commit/c4cfd449661e0085322d9c61a504b3b0a71eabb4))
* **module:theme:** adding Spanish locale [#308](https://github.com/ng-alain/delon/issues/308) ([#1175](https://github.com/ng-alain/delon/issues/1175)) ([3428310](https://github.com/ng-alain/delon/commit/342831048bd37e5dd02cee4eebbf39904bfa0a8f))
* **util:form:** add `MatchControl` ([#1178](https://github.com/ng-alain/delon/issues/1178)) ([84ab014](https://github.com/ng-alain/delon/commit/84ab014da009803476dfc4d8b3c7cb7b447ca18a))


### Performance Improvements

* optimize cli ([#1192](https://github.com/ng-alain/delon/issues/1192)) ([34c1e57](https://github.com/ng-alain/delon/commit/34c1e57ea01d465fed37dc2bb1fd5b6234ab4375))
* use `ngDevMode` to tree-shake errors ([#1191](https://github.com/ng-alain/delon/issues/1191)) ([56b45c8](https://github.com/ng-alain/delon/commit/56b45c8ecaf93248e70701acd25ce096f37fc0b5))



# [11.6.0](https://github.com/ng-alain/delon/compare/11.3.1...11.6.0) (2021-02-07)


### Bug Fixes

* **abc:auto-focus:** add `delay` property ([#1165](https://github.com/ng-alain/delon/issues/1165)) ([558fb02](https://github.com/ng-alain/delon/commit/558fb0211a4096b02dd7f9648cb2fc57b9641a32))
* **abc:st:** fix to top can't working ([#1153](https://github.com/ng-alain/delon/issues/1153)) ([93e314d](https://github.com/ng-alain/delon/commit/93e314de1c4d42117d25fc8f620e4176016cda64))
* **cli:ng-update:** Cannot read property 'configurations' of undefined ([#1156](https://github.com/ng-alain/delon/issues/1156)) ([26d41e1](https://github.com/ng-alain/delon/commit/26d41e1efed154e0cdf477db88d2440a2c40b9ae))
* **theme:_HttpClient:** fix count when subscribed ([#1157](https://github.com/ng-alain/delon/issues/1157)) ([a6b375a](https://github.com/ng-alain/delon/commit/a6b375ab89c80f012bca3f5abf26686f0bbee118))
* fix less4 ([#1155](https://github.com/ng-alain/delon/issues/1155)) ([331b009](https://github.com/ng-alain/delon/commit/331b0095bbe725e1a192225cc25178da307e8c6e))


### Features

* **abc:auto-focus:** add `auto-focus` component ([#1161](https://github.com/ng-alain/delon/issues/1161)) ([c02b755](https://github.com/ng-alain/delon/commit/c02b7552220d0bdbb4a56d435eac3640e785d966))
* **abc:highlight:** add `highlight` component ([#1160](https://github.com/ng-alain/delon/issues/1160)) ([0d940c3](https://github.com/ng-alain/delon/commit/0d940c354421ddb110ac2ccbe229bf0332703dda))
* **abc:st:** add `contextmenu` property ([#1169](https://github.com/ng-alain/delon/issues/1169)) ([6461428](https://github.com/ng-alain/delon/commit/6461428e94a6ee7b6954ad54ce27964b6fb3245b))
* **abc:st:** add `showHeader` property ([#1151](https://github.com/ng-alain/delon/issues/1151)) ([47f0447](https://github.com/ng-alain/delon/commit/47f044769932c58ccca5502913f20f39a55b1746))
* **util:ArrayService:** add `findTree` method ([#1164](https://github.com/ng-alain/delon/issues/1164)) ([12bf232](https://github.com/ng-alain/delon/commit/12bf2320f66c8f8c3e36cfbcbc95dd640c780b60))
* **util:token:** add tokens ([#1162](https://github.com/ng-alain/delon/issues/1162)) ([1a4b9d7](https://github.com/ng-alain/delon/commit/1a4b9d78767f3e631dca530548e8989dba8a7c2a))
* support data type of `STColumn` ([#1159](https://github.com/ng-alain/delon/issues/1159)) ([dadba41](https://github.com/ng-alain/delon/commit/dadba4187ee984ee4db63a18312ebe72a8f4c021))
* **util:pipes:** add `filter` pipe ([#1158](https://github.com/ng-alain/delon/issues/1158)) ([ac8f768](https://github.com/ng-alain/delon/commit/ac8f7688a45824945c841805fff2fc19d19429e8))



## [11.3.1](https://github.com/ng-alain/delon/compare/11.3.0...11.3.1) (2021-01-28)


### Bug Fixes

* **sf:widget:select:** add `showArrow` property ([#1147](https://github.com/ng-alain/delon/issues/1147)) ([4d51d61](https://github.com/ng-alain/delon/commit/4d51d6147d4c1908f684cdff1e7f5553e719a440))



# [11.3.0](https://github.com/ng-alain/delon/compare/11.2.0...11.3.0) (2021-01-25)


### Bug Fixes

* **abc:full-content:** fix scroll bar cannot be displayed in the work… ([#1140](https://github.com/ng-alain/delon/issues/1140)) ([0fd0c40](https://github.com/ng-alain/delon/commit/0fd0c4064010b4286b1b7fa223ca4d9c966ac8ad))
* **form:** fix missing id association ([#1143](https://github.com/ng-alain/delon/issues/1143)) ([35bdffb](https://github.com/ng-alain/delon/commit/35bdffbd0455b418b8ee22ffe8d54b63f93e779a))
* **sf:widget:array:** fix invalid `minItems` ([#1145](https://github.com/ng-alain/delon/issues/1145)) ([1411a6d](https://github.com/ng-alain/delon/commit/1411a6d31926a5aa3983ce48aa95c879fcb723dc))
* **sf:widget:time:** fix lose placeholder ([#1139](https://github.com/ng-alain/delon/issues/1139)) ([e341c93](https://github.com/ng-alain/delon/commit/e341c93f9fa7296058cf633b21c0cebe7a694935))
* **theme:** fix router animation is optional ([#1136](https://github.com/ng-alain/delon/issues/1136)) ([2865c2d](https://github.com/ng-alain/delon/commit/2865c2d9f0e6398f5dd4eeba433e9aa3c0a57d77))


### Features

* **abc:quick-menu:** add `expand` property ([#1138](https://github.com/ng-alain/delon/issues/1138)) ([ae80102](https://github.com/ng-alain/delon/commit/ae801023415e002de500125570fbd5a280102a79))
* **abc:sv:** add `sv-value` component ([#1141](https://github.com/ng-alain/delon/issues/1141)) ([4892a71](https://github.com/ng-alain/delon/commit/4892a71a8194a1cab38322dbf9a67735ff9c319f))



# [11.2.0](https://github.com/ng-alain/delon/compare/11.1.0...11.2.0) (2021-01-13)


### Bug Fixes

* **cli:** fix invalid version number of `screenfull` ([#1129](https://github.com/ng-alain/delon/issues/1129)) ([f9291c9](https://github.com/ng-alain/delon/commit/f9291c9852fd769d91c8f395b5462aac110d8e1a))
* **theme:** fix router animation when changed ([#1134](https://github.com/ng-alain/delon/issues/1134)) ([dcb6284](https://github.com/ng-alain/delon/commit/dcb628495a52e4a0b61ee4ad7a692243f29c90c7))

### Features

* **chart:number-info:** support multiple style ([#1133](https://github.com/ng-alain/delon/issues/1133)) ([876d4db](https://github.com/ng-alain/delon/commit/876d4db798dfc4cd1ee077324fe3a459bc6fff72))

### BREAKING CHANGES

* **cli:** use .template suffix for schematic template files ([#1128](https://github.com/ng-alain/delon/issues/1128)) ([0ac979e](https://github.com/ng-alain/delon/commit/0ac979e4cc7dcbdfba923be6327e414f3991b2d7))



# [11.1.0](https://github.com/ng-alain/delon/compare/11.0.2...11.1.0) (2021-01-05)


### Bug Fixes

* **auth:** fix always trigger refresh event in jwt ([#1115](https://github.com/ng-alain/delon/issues/1115)) ([1ef2369](https://github.com/ng-alain/delon/commit/1ef23696d5ff8de8133cbe2d5e7a53cedee2f5d6))
* **cli:plugin:icon:** fix support conditional expression ([#1121](https://github.com/ng-alain/delon/issues/1121)) ([a481c1c](https://github.com/ng-alain/delon/commit/a481c1c257edaac603852c0096c5f4a4ecb371f5))


### Features

* **abc:st:** add `pureList` method ([#1126](https://github.com/ng-alain/delon/issues/1126)) ([70270f8](https://github.com/ng-alain/delon/commit/70270f8bb4914e5ad2bd4d769f121131b4e98944))
* **abc:st:** support item type of `setRow` ([#1119](https://github.com/ng-alain/delon/issues/1119)) ([9ea783e](https://github.com/ng-alain/delon/commit/9ea783e327d206b8cc8ad0d10cd2b56bd454d173))
* **chart:** lazy load g2 libary ([#1123](https://github.com/ng-alain/delon/issues/1123)) ([cb7b5bb](https://github.com/ng-alain/delon/commit/cb7b5bbbbaeb218ac4e912275cd77e97dfc6e7e2))
* **theme:** add `RTLService` service ([#1120](https://github.com/ng-alain/delon/issues/1120)) ([1f4f67b](https://github.com/ng-alain/delon/commit/1f4f67b239f6ea7227aca046ba9110642a43e774))
* support rtl ([#1118](https://github.com/ng-alain/delon/issues/1118)) ([a5dc52e](https://github.com/ng-alain/delon/commit/a5dc52e0e180b18450e1d07537ff3da865c166b2))


### Performance Improvements

* **theme:** perf `[@enable-all-colors](https://github.com/enable-all-colors): false` ([#1113](https://github.com/ng-alain/delon/issues/1113)) ([d03c8fb](https://github.com/ng-alain/delon/commit/d03c8fb1344b8d692e987fcd259e7d58417ec9dc))



## [11.0.2](https://github.com/ng-alain/delon/compare/11.0.1...11.0.2) (2020-12-23)


### Bug Fixes

* **cli:ng-add:** include color.less & theme css files ([#1111](https://github.com/ng-alain/delon/issues/1111)) ([5beca2f](https://github.com/ng-alain/delon/commit/5beca2fe36c64e5fdba6732facd276311ac6291b))
* **sf:select:** fix invalid loading status ([#1110](https://github.com/ng-alain/delon/issues/1110)) ([a147f95](https://github.com/ng-alain/delon/commit/a147f95cc1d8d0c7524827cdd732b3ece47490cb))
* **theme:_HttpClient:** fix load status allow multiple requests ([#1109](https://github.com/ng-alain/delon/issues/1109)) ([9e3dc29](https://github.com/ng-alain/delon/commit/9e3dc29782bc9334e62abbf6afccb5a62e903653))



## [11.0.1](https://github.com/ng-alain/delon/compare/11.0.0...11.0.1) (2020-12-22)


### Bug Fixes

* **cli:** remove tslint-language-service depend ([#1106](https://github.com/ng-alain/delon/issues/1106)) ([70ebb94](https://github.com/ng-alain/delon/commit/70ebb94c98116381c5dc32a07f3254675a56f6a3))



# [11.0.0](https://github.com/ng-alain/delon/compare/10.1.3...11.0.0) (2020-12-22)


### Bug Fixes

* **sf:** fix invalid empty value of `pathValue` property ([#1099](https://github.com/ng-alain/delon/issues/1099)) ([dad5ed0](https://github.com/ng-alain/delon/commit/dad5ed045d5c559cb2e4ab3b92f297e7c1ee9f3c))
* **util:time:** fix invalid format `toDate` ([#1093](https://github.com/ng-alain/delon/issues/1093)) ([3b97fc3](https://github.com/ng-alain/delon/commit/3b97fc3f33a58ff2701df52d1a0a055dfc523165))


### Features

* **cli:** Use source-map-explorer instead of webpack-bundle-analyzer ([#1091](https://github.com/ng-alain/delon/issues/1091)) ([30a3dc9](https://github.com/ng-alain/delon/commit/30a3dc972f02138fbd572114789738a957454b3d))
* **cli:module:** feat auto import routing module to top routing module ([#1100](https://github.com/ng-alain/delon/issues/1100)) ([da46d3c](https://github.com/ng-alain/delon/commit/da46d3c496cc13adc8430ed9bea2829a435d4b68))
* **form:textarea:** add `change`, `focus`, `blur` events ([#1096](https://github.com/ng-alain/delon/issues/1096)) ([8ae609c](https://github.com/ng-alain/delon/commit/8ae609c8459cce3db0d9973a63f3e1e35547ec98))
* **module:theme:** adding French locale ([#1094](https://github.com/ng-alain/delon/issues/1094)) ([b20259a](https://github.com/ng-alain/delon/commit/b20259a787ca76671e9578ada060737ce32a6a92))
* **sf:** Allow use of `setVisible` method ([#1098](https://github.com/ng-alain/delon/issues/1098)) ([fb46405](https://github.com/ng-alain/delon/commit/fb464050607effa595bae9f679c5097131039003))
* **sf:select:**  add `searchDebounceTime` property ([#1097](https://github.com/ng-alain/delon/issues/1097)) ([0fa1e70](https://github.com/ng-alain/delon/commit/0fa1e70a88a6cc400ff036b92556ebf3a67e33db))
* **theme:layout-default:** add `nav` property ([#1101](https://github.com/ng-alain/delon/issues/1101)) ([9703641](https://github.com/ng-alain/delon/commit/9703641147cb49b9853b1cb175241793177a5bff))



## [10.1.2](https://github.com/ng-alain/delon/compare/10.1.1...10.1.2) (2020-11-26)


### Bug Fixes

* **abc:st:** fix don't interrupt when invalid get data ([#1079](https://github.com/ng-alain/delon/issues/1079)) ([d25996c](https://github.com/ng-alain/delon/commit/d25996c30b36ad2efadd0a564b849f6d5ec4d2d2))


### Performance Improvements

* **abc:st:** optimize reminder text ([#1081](https://github.com/ng-alain/delon/issues/1081)) ([0917357](https://github.com/ng-alain/delon/commit/0917357263917ff64a40337f89ced08e17b342ac))



## [10.1.1](https://github.com/ng-alain/delon/compare/10.1.0...10.1.1) (2020-11-18)


### Bug Fixes

* **abc:count-down:** fix timestamp of number type ([#1075](https://github.com/ng-alain/delon/issues/1075)) ([2a0fae8](https://github.com/ng-alain/delon/commit/2a0fae8169030902752fca0d1bf4d6a2647fd307))
* **form:** fix invalid condition in array ([#1072](https://github.com/ng-alain/delon/issues/1072)) ([45374a9](https://github.com/ng-alain/delon/commit/45374a96ede62f2b36e63c62e98026170406aa6c))
* **form:** fix invalid error style ([#1073](https://github.com/ng-alain/delon/issues/1073)) ([6f7efe7](https://github.com/ng-alain/delon/commit/6f7efe77d8402cffe4c1bc54cf760859f25f8a9f))
* **form:** pref style in small screen ([#1074](https://github.com/ng-alain/delon/issues/1074)) ([680237a](https://github.com/ng-alain/delon/commit/680237a43f993fa24785f77abad61f552661fd42))



# [10.1.0](https://github.com/ng-alain/delon/compare/10.0.3...10.1.0) (2020-11-17)


### Bug Fixes

* **abc:se:** fix invalid error style ([#1067](https://github.com/ng-alain/delon/issues/1067)) ([d8c1cee](https://github.com/ng-alain/delon/commit/d8c1cee92d6505cde2f7e97c08ee7e194723d249))
* **chart:timeline:** can't change line when click legend ([#1068](https://github.com/ng-alain/delon/issues/1068)) ([ba6f9b3](https://github.com/ng-alain/delon/commit/ba6f9b37cba0eb9836467431ed9d8b85166062a0))
* **form:** fix misalignment of inline mode ([#1069](https://github.com/ng-alain/delon/issues/1069)) ([18bb8a8](https://github.com/ng-alain/delon/commit/18bb8a8488facda4757e7ffcfa3022c9b4a4cd61))


### Features

* **abc:se,sv,form:** add `optionalHelpColor` ([#1070](https://github.com/ng-alain/delon/issues/1070)) ([125606c](https://github.com/ng-alain/delon/commit/125606cff431203de7f5f640cb4479ad1a6cc19e))
* **module:sf:date:** add `nzInputReadOnly` property ([#1066](https://github.com/ng-alain/delon/issues/1066)) ([c3b6b87](https://github.com/ng-alain/delon/commit/c3b6b878ec3cbc0f53e30fa1db3cf98b47733259))



## [10.0.3](https://github.com/ng-alain/delon/compare/10.0.2...10.0.3) (2020-11-12)


### Bug Fixes

* **g2:*:** fix view can't be refresh when the data structure changed ([#1063](https://github.com/ng-alain/delon/issues/1063)) ([ff14726](https://github.com/ng-alain/delon/commit/ff14726d3cd28345a079bb5bc38d309292148c99))


### Performance Improvements

* optimize `acl` type ([#1061](https://github.com/ng-alain/delon/issues/1061)) ([93068fc](https://github.com/ng-alain/delon/commit/93068fc5c5ad30abdd1f0b013dba0c33be3ed7bc))



## [10.0.2](https://github.com/ng-alain/delon/compare/10.0.1...10.0.2) (2020-10-15)


### Bug Fixes

* **abc:st:** fix http params of `process` method ([#1059](https://github.com/ng-alain/delon/issues/1059)) ([4d2dd0a](https://github.com/ng-alain/delon/commit/4d2dd0aadade43857e875562b26e7052ce54f1ba))



## [10.0.1](https://github.com/ng-alain/delon/compare/10.0.0...10.0.1) (2020-10-02)


### Bug Fixes

* **abc:reuse-tab:** fix invalid this scope of hook events ([#1056](https://github.com/ng-alain/delon/issues/1056)) ([ccddfd9](https://github.com/ng-alain/delon/commit/ccddfd973794d93cb48dd37d8e28e39b121ec822))
* **abc:st:** fix blank area in virtual scroll ([#1055](https://github.com/ng-alain/delon/issues/1055)) ([698f8ac](https://github.com/ng-alain/delon/commit/698f8acf05d994a3555fc575c3178c5c1ed26dba))



# [10.0.0](https://github.com/ng-alain/delon/compare/9.5.5...10.0.0) (2020-09-29)


### Bug Fixes

* change `extends` from `tsconfig.base.json` to `tsconfig.json` ([#1051](https://github.com/ng-alain/delon/issues/1051)) ([c5aec30](https://github.com/ng-alain/delon/commit/c5aec300a81e5e6dbeb572e8ea5bb15475d176eb))
* **abc:reuse-tab:** fix remove tab when reuse is `false` ([#1021](https://github.com/ng-alain/delon/issues/1021)) ([e9f8ead](https://github.com/ng-alain/delon/commit/e9f8eadc6ee085fbcdc37cce184ef948ad0a0897))
* **abc:sidebar-nav:** fix space to avoid scroll ([#1046](https://github.com/ng-alain/delon/issues/1046)) ([7efa241](https://github.com/ng-alain/delon/commit/7efa241b7cc907e7a1725179c202d839464e73bc))
* **abc:st:** fix `width` can't be reset when refresh group columns ([#1027](https://github.com/ng-alain/delon/issues/1027)) ([6f86d8d](https://github.com/ng-alain/delon/commit/6f86d8db8f267fb5e136170ddffb54b7c23fced4))
* **abc:st:** fix reset pi is 1 when confirm filter ([#1020](https://github.com/ng-alain/delon/issues/1020)) ([9fa5de3](https://github.com/ng-alain/delon/commit/9fa5de310a37a500ce0fe7890730d84a22fdc7a5))
* **cli:** fix lose `</div>` in index.html ([#1030](https://github.com/ng-alain/delon/issues/1030)) ([a64f9ef](https://github.com/ng-alain/delon/commit/a64f9efdf73f3a3fea46ae664dca742dba8af18a))
* **form:object:** fix misalignment ([#1037](https://github.com/ng-alain/delon/issues/1037)) ([ed24223](https://github.com/ng-alain/delon/commit/ed24223150a540e2e17bf4560125acf1628e71be))
* **form:radio:** fix can't disabled item ([#1033](https://github.com/ng-alain/delon/issues/1033)) ([94998e1](https://github.com/ng-alain/delon/commit/94998e192119c40fca7ec6405b2a0ac0f222161d))
* **form:widget:string:** fix `autofocus` compatibility ([#1028](https://github.com/ng-alain/delon/issues/1028)) ([3f033c5](https://github.com/ng-alain/delon/commit/3f033c5657d82bf7a5de20fe54ea43e74bb42027))
* **mock:** show params in log ([#1017](https://github.com/ng-alain/delon/issues/1017)) ([3d01921](https://github.com/ng-alain/delon/commit/3d019217aadfca9868f3bf500dbbfd205d7fcb26))
* **theme:http:** fix ingored value handling when params is `HttpParams` type ([#1016](https://github.com/ng-alain/delon/issues/1016)) ([47ff3c3](https://github.com/ng-alain/delon/commit/47ff3c3e0b88a0312d4948e928931037d02addf8))
* **theme:menu:** fix processed logically of `setItem` method ([#1044](https://github.com/ng-alain/delon/issues/1044)) ([120f425](https://github.com/ng-alain/delon/commit/120f425b2e58869a307862950bbe23a687eaeb42))


### Features

* **abc:down-file:** add `pre` property ([#1032](https://github.com/ng-alain/delon/issues/1032)) ([5538ef8](https://github.com/ng-alain/delon/commit/5538ef8b34e74fe897fdd39272edbb002dbdfb5b))
* **abc:onboarding:** add `lightStyle` property ([#1012](https://github.com/ng-alain/delon/issues/1012)) ([2189b54](https://github.com/ng-alain/delon/commit/2189b545546e6fb25c6dee4318811ff1f0ab77c0))
* **abc:onboarding:** add onboarding component ([#986](https://github.com/ng-alain/delon/issues/986)) ([fbe46d5](https://github.com/ng-alain/delon/commit/fbe46d5e811b0b4ee9815369e4e6044256a3b40d))
* **abc:reuse-tab:** add `routeParamMatchMode` property ([#1018](https://github.com/ng-alain/delon/issues/1018)) ([05876ca](https://github.com/ng-alain/delon/commit/05876caa2c64ee5f5f4159e7f8aa68ba5fe50298))
* **abc:reuse-tab:** add lifecycle hook interfaces ([#1047](https://github.com/ng-alain/delon/issues/1047)) ([cba82ea](https://github.com/ng-alain/delon/commit/cba82eae078a5e2d419ea12f8350d76ac76dac06))
* **abc:reuse-tab:** add type of `_onReuseInit` ([#1026](https://github.com/ng-alain/delon/issues/1026)) ([69a04ee](https://github.com/ng-alain/delon/commit/69a04ee16c77ffd42475c25a0db0cc0036c13676))
* **abc:st:** add `className` of button ([#1034](https://github.com/ng-alain/delon/issues/1034)) ([26f60ce](https://github.com/ng-alain/delon/commit/26f60cec7e2a53f5d91c1c6c0a8428567fc39781))
* **abc:st:** add link title when type is link ([#1031](https://github.com/ng-alain/delon/issues/1031)) ([09dcc8d](https://github.com/ng-alain/delon/commit/09dcc8dc5994e1fbdea4b68395a25b00f12cde7e))
* **abc:st:** support resizable headers ([#1049](https://github.com/ng-alain/delon/issues/1049)) ([08de51c](https://github.com/ng-alain/delon/commit/08de51ce6efadd51d9e917a3e039f66bf4bc9c9f))
* **abc:st:** support TemplateRef of render & renderTitle ([#1050](https://github.com/ng-alain/delon/issues/1050)) ([be4f6da](https://github.com/ng-alain/delon/commit/be4f6dab85ccaa06ac9522a64842ef5bdba8f548))
* use `ng-alain-plugin-theme` instand of `scripts/themes.js` ([#1039](https://github.com/ng-alain/delon/issues/1039)) ([6c8e571](https://github.com/ng-alain/delon/commit/6c8e5710259ae13e06f00fef1c99a87773f988aa))
* **abc:st:** support array parameters of mulit sort ([#1015](https://github.com/ng-alain/delon/issues/1015)) ([e1119f5](https://github.com/ng-alain/delon/commit/e1119f5c98e883f8544e9e181464495095f34c14))
* **auth:** add `refresh` event ([#1011](https://github.com/ng-alain/delon/issues/1011)) ([3388e1f](https://github.com/ng-alain/delon/commit/3388e1fb071b99e02f87168ad8223101fe7f9c4d))
* **chart:water-wave:** add `render()` method ([#1014](https://github.com/ng-alain/delon/issues/1014)) ([c3d31c4](https://github.com/ng-alain/delon/commit/c3d31c4a1b6f116e88bb849c88999fccd8ee7f69))
* **cli:** use cnpm to interrupt the installation ([#1036](https://github.com/ng-alain/delon/issues/1036)) ([b2ff9e1](https://github.com/ng-alain/delon/commit/b2ff9e186d570590cd5d1fe79be545b4c2b142d3))



## [9.5.5](https://github.com/ng-alain/delon/compare/9.5.4...9.5.5) (2020-07-21)


### Bug Fixes

* **cli:** fix header ([#1008](https://github.com/ng-alain/delon/issues/1008)) ([2ae877c](https://github.com/ng-alain/delon/commit/2ae877cbce756fbd1082f04d4f7a82a842c2d486))


### Features

* **cli:** pretty-quick instead lint-staged ([#995](https://github.com/ng-alain/delon/issues/995)) ([1374070](https://github.com/ng-alain/delon/commit/1374070f85555e78d37b542d162e855e45413ff4))



## [9.5.4](https://github.com/ng-alain/delon/compare/9.5.3...9.5.4) (2020-07-17)


### Bug Fixes

* **abc:sidebar:** fix closed floating when toggle collapsed ([#998](https://github.com/ng-alain/delon/issues/998)) ([29045d7](https://github.com/ng-alain/delon/commit/29045d7108057655e8552d32d739c287c8530e40))
* **abc:st:** fix ingore group column whne children is empty array ([#1003](https://github.com/ng-alain/delon/issues/1003)) ([aa7e750](https://github.com/ng-alain/delon/commit/aa7e75070bbcc65a1c0859ff2c70eab6cd9b3637))
* **abc:st:** fix over 26 columns export failure ([#997](https://github.com/ng-alain/delon/issues/997)) ([a8a2814](https://github.com/ng-alain/delon/commit/a8a2814e1221019f3df4b7cdffd20916bd5557a6))
* **auth:** fix should removed `_allow_anonymous` property in truth request ([#1002](https://github.com/ng-alain/delon/issues/1002)) ([d5e6056](https://github.com/ng-alain/delon/commit/d5e6056a33b5d12c73b343f2c7a9051fe351845b))
* **theme:layout:default:** fix non-support autocomplete ([#1004](https://github.com/ng-alain/delon/issues/1004)) ([8f0a5bd](https://github.com/ng-alain/delon/commit/8f0a5bdd3ceed2e7e2edf3b572e940923048a67c))


### Features

* add sl_SI locale ([#996](https://github.com/ng-alain/delon/issues/996)) ([63073bc](https://github.com/ng-alain/delon/commit/63073bcdafd93a79b6acfce7f937c329c6ad8553))



## [9.5.3](https://github.com/ng-alain/delon/compare/9.5.2...9.5.3) (2020-07-10)


### Bug Fixes

* **abc:media:** fix loading multiple components at the same time will cause `No window.Plyr found` ([#990](https://github.com/ng-alain/delon/issues/990)) ([c3f29a0](https://github.com/ng-alain/delon/commit/c3f29a0f45d1bc5bda55982d75484f7ed1ca5306))
* **abc:st:** fix noResult misalignment in grouping header ([#991](https://github.com/ng-alain/delon/issues/991)) ([dc1626e](https://github.com/ng-alain/delon/commit/dc1626ec6b89c578f2e4ed005b1e81956e3da6ce))
* **abc:st:** fix pre-clear data of `resetColumns` method ([#989](https://github.com/ng-alain/delon/issues/989)) ([15f397c](https://github.com/ng-alain/delon/commit/15f397ceedb514bf6ee22724fa69820c5272f4a5))



## [9.5.2](https://github.com/ng-alain/delon/compare/9.5.1...9.5.2) (2020-07-06)


### Bug Fixes

* **abc:page-header:** fix refresh title when route changed ([#987](https://github.com/ng-alain/delon/issues/987)) ([8f302fb](https://github.com/ng-alain/delon/commit/8f302fb9a2c779dc0e799f276f93e31936a05108))
* **abc:st:** fix invalid width in grouping header ([#984](https://github.com/ng-alain/delon/issues/984)) ([7cd5b49](https://github.com/ng-alain/delon/commit/7cd5b497b0554a13eb7b58a1e7e113fdf819b6cc))
* **chart:*:** fix access to `chart` instances ([#983](https://github.com/ng-alain/delon/issues/983)) ([4a3e80c](https://github.com/ng-alain/delon/commit/4a3e80c172ca5209f9a896b28ddc3b5fd6ffb4e8))
* **form:autocomplete,select:** fix return original data in `change` property ([#985](https://github.com/ng-alain/delon/issues/985)) ([7d70629](https://github.com/ng-alain/delon/commit/7d70629f01f820658240fd6e966b6f782fe3a087))



## [9.5.1](https://github.com/ng-alain/delon/compare/9.5.0...9.5.1) (2020-07-02)


### Bug Fixes

* **chart:timeline:** fix invalid format of slider ([#981](https://github.com/ng-alain/delon/issues/981)) ([d445935](https://github.com/ng-alain/delon/commit/d445935c3b11c509e6999ea132ae55700e353a04))



# [9.5.0](https://github.com/ng-alain/delon/compare/9.4.1...9.5.0) (2020-07-01)


### Bug Fixes

* **abc:reuest-tab:** fix cannot read property 'active' ([#973](https://github.com/ng-alain/delon/issues/973)) ([2bf13f9](https://github.com/ng-alain/delon/commit/2bf13f96db73a1ec36525eb12312f0fd5536c4fd))
* **abc:reuse-tab:** fix take `nzSelectedIndex` of `nz-tabset` ([#974](https://github.com/ng-alain/delon/issues/974)) ([f4abe81](https://github.com/ng-alain/delon/commit/f4abe81b5b941ba4aae3c7cbed5e7300ea5e36f4))
* **abc:se:** fix ingored set id when control invalid controlAccessor ([#975](https://github.com/ng-alain/delon/issues/975)) ([e205c4d](https://github.com/ng-alain/delon/commit/e205c4dc1d96f8eca5a36705d66bde4604a53070))
* **cli:** fix missing dependencie "@antv/data-set" ([#971](https://github.com/ng-alain/delon/issues/971)) ([95a35ac](https://github.com/ng-alain/delon/commit/95a35ac771d35f42253fec7060a85ad54c4ca9e2))
* **cli:** only supports angular 9.x ([#978](https://github.com/ng-alain/delon/issues/978)) ([d9fccf7](https://github.com/ng-alain/delon/commit/d9fccf7b690a90d9610b6eda3a185f73b34b867d))
* **form:** export utils ([#972](https://github.com/ng-alain/delon/issues/972)) ([f61947e](https://github.com/ng-alain/delon/commit/f61947ecee40076b024a7a81d692c3fb122d1b5a))
* **form:** fix invalid width of inline mode ([#977](https://github.com/ng-alain/delon/issues/977)) ([5de1015](https://github.com/ng-alain/delon/commit/5de101584abb384373d45c8a54f050caef6b7e0a))
* **theme:drawer:** fix `nzWidth` is invalid ([#970](https://github.com/ng-alain/delon/issues/970)) ([772e3de](https://github.com/ng-alain/delon/commit/772e3de67abc72b7c04ce09ddb806d86142da73e))


### Features

* **abc:image:** add `useHttp` property ([#968](https://github.com/ng-alain/delon/issues/968)) ([c3488b6](https://github.com/ng-alain/delon/commit/c3488b68f3a48bc883895f59e991d2f5c07017d7))
* **form:** add `formValueChange` path ([#979](https://github.com/ng-alain/delon/issues/979)) ([edadc29](https://github.com/ng-alain/delon/commit/edadc29436f09e9473831441e9a5535f8d1b1747))



## [9.4.1](https://github.com/ng-alain/delon/compare/9.4.0...9.4.1) (2020-06-25)


### Bug Fixes

* **abc:se:** fix invalid auto assigned id under nested `se` component ([#959](https://github.com/ng-alain/delon/issues/959)) ([cc081b8](https://github.com/ng-alain/delon/commit/cc081b864c231df0835a76ca8eb590eee8f37c68))
* **abc:st:** fix losing `nzWidthConfig` ([#964](https://github.com/ng-alain/delon/issues/964)) ([bf0aa88](https://github.com/ng-alain/delon/commit/bf0aa8874817bf9d4fac40978cce29dcfea9b76a))
* **chart:pie:** fix `isPercent` scope ([#965](https://github.com/ng-alain/delon/issues/965)) ([d8815af](https://github.com/ng-alain/delon/commit/d8815afc10bb3e6e98d33176286738dab26dbc21))
* **cli:plugin:icon:** fix skip cannot be resolved ([#966](https://github.com/ng-alain/delon/issues/966)) ([4512f93](https://github.com/ng-alain/delon/commit/4512f93239142dd216c1aeacd3b085f1b4717a7c))



# [9.4.0](https://github.com/ng-alain/delon/compare/9.3.2...9.4.0) (2020-06-13)


### Bug Fixes

* **abc:reuse-tab:** fix refresh tab component when call replace method of service ([#953](https://github.com/ng-alain/delon/issues/953)) ([44b6a9c](https://github.com/ng-alain/delon/commit/44b6a9c9d02f6d1315fdade5f2fbf0bf6710a21c))
* **abc:st:** fix call `resetColumns` method should clean data ([#954](https://github.com/ng-alain/delon/issues/954)) ([b89f13c](https://github.com/ng-alain/delon/commit/b89f13cc31a058742b891fdfd656f21572750a25))
* **abc:st:** fix recalculate no value of removeRows method ([#944](https://github.com/ng-alain/delon/issues/944)) ([09202dd](https://github.com/ng-alain/delon/commit/09202ddb5ce8abff2692a0ddd206d8af5aef04d2))
* **form:** fix text overflow ellipsis of lable ([#949](https://github.com/ng-alain/delon/issues/949)) ([34a2c63](https://github.com/ng-alain/delon/commit/34a2c6369c0899ee7d6d00fbc07c4e24be61eea2))
* **form:widget:array:** fix clean value of `cleanValue` ([#948](https://github.com/ng-alain/delon/issues/948)) ([3881014](https://github.com/ng-alain/delon/commit/3881014d4b137ab38dbba85dcfe62a6b12733352))
* **form:widget:upload:** fix value should not be updated during initialization ([#947](https://github.com/ng-alain/delon/issues/947)) ([5d3abf0](https://github.com/ng-alain/delon/commit/5d3abf0a8b1ae3a4a150e176c74a8a27dab51afd))


### Features

* **abc:se:** add `errors` property ([#932](https://github.com/ng-alain/delon/issues/932)) ([7316257](https://github.com/ng-alain/delon/commit/7316257ba248d1308cbf0e9e0a87d7c24e5a0737))
* **abc:se:** add `ingoreDirty` property ([#945](https://github.com/ng-alain/delon/issues/945)) ([5f5dfcc](https://github.com/ng-alain/delon/commit/5f5dfccdf73b5a547c28c2240a0351c9d5600830))
* **chart:** add `clickItem` event ([#951](https://github.com/ng-alain/delon/issues/951)) ([f9fff60](https://github.com/ng-alain/delon/commit/f9fff6077324e1ef75b5b80ed6063fc375b58f89))
* **form:** add `showRequired` property of ui schema ([#940](https://github.com/ng-alain/delon/issues/940)) ([d10f29d](https://github.com/ng-alain/delon/commit/d10f29d336a4674014d8955ac19e8a1c9d1f67a5))
* **form:widget:date:** add `change` event ([#950](https://github.com/ng-alain/delon/issues/950)) ([172ba08](https://github.com/ng-alain/delon/commit/172ba0805e6c3e5ccc8a46e0971277cbeabc04ea))
* **form:widget:object:** add expand of type is card ([#952](https://github.com/ng-alain/delon/issues/952)) ([22833c0](https://github.com/ng-alain/delon/commit/22833c01c3bfaf80291ea1f159f01fe779e13b39))



## [9.3.2](https://github.com/ng-alain/delon/compare/9.3.1...9.3.2) (2020-06-01)


### Bug Fixes

* **abc:page-header:** fix route event cannot be destroyed in reuse router ([#933](https://github.com/ng-alain/delon/issues/933)) ([0080efd](https://github.com/ng-alain/delon/commit/0080efdfe32e2fa23900562c11c386e3d76bd31b))
* **cli:** fix ng-update ([#934](https://github.com/ng-alain/delon/issues/934)) ([8f26c71](https://github.com/ng-alain/delon/commit/8f26c71e085715c569185c72bfa6b3a777047f9c))
* **form:** async properites ([#935](https://github.com/ng-alain/delon/issues/935)) ([aa6de23](https://github.com/ng-alain/delon/commit/aa6de23b98ec40a886fa5acbdbc7629ff5453499))
* **form:** fix optional color of dark theme ([#941](https://github.com/ng-alain/delon/issues/941)) ([50d1617](https://github.com/ng-alain/delon/commit/50d161782db78872f504b35570704cf4e1739a7a)), closes [#939](https://github.com/ng-alain/delon/issues/939)



## [9.3.1](https://github.com/ng-alain/delon/compare/9.3.0...9.3.1) (2020-05-27)


### Bug Fixes

* **abc:reuse-tab:** fix dark style of close button ([#923](https://github.com/ng-alain/delon/issues/923)) ([f35c617](https://github.com/ng-alain/delon/commit/f35c6170ba1e1138cf6e7d228dd22838949f86fd))
* **abc:reuse-tab:** fix exclude items should be updated after leave ([#925](https://github.com/ng-alain/delon/issues/925)) ([e6fef31](https://github.com/ng-alain/delon/commit/e6fef31d3814ff5fd0a6692f00907d2f3f7fbb97))
* **abc:se:** fix only control vision when error is null ([#929](https://github.com/ng-alain/delon/issues/929)) ([42713d3](https://github.com/ng-alain/delon/commit/42713d3b3069f0a16d065f9ce44b85cfcacb0977))
* **abc:sidebar-nav:** add title of menu item ([#924](https://github.com/ng-alain/delon/issues/924)) ([ac1445c](https://github.com/ng-alain/delon/commit/ac1445c26425640d4dd9e2bc346c18813d2992a3))
* **theme:** fix flex ([#927](https://github.com/ng-alain/delon/issues/927)) ([afb8ad1](https://github.com/ng-alain/delon/commit/afb8ad1e3b5dc13ecb2a337855bf0ffd25685a50))
* **theme:layout:fullscreen:** fix dark theme ([#926](https://github.com/ng-alain/delon/issues/926)) ([b61b7f6](https://github.com/ng-alain/delon/commit/b61b7f64e1f0e208d60b09484a6ba6438f3c6c61))



# [9.3.0](https://github.com/ng-alain/delon/compare/9.2.4...9.3.0) (2020-05-24)


### Bug Fixes

* fix entry point warning ([#911](https://github.com/ng-alain/delon/issues/911)) ([248e8c8](https://github.com/ng-alain/delon/commit/248e8c8961e593fb525f752c16ff2cef6d3a213c))
* **abc:media:** fix can't init when Plyr has beed load ([#909](https://github.com/ng-alain/delon/issues/909)) ([e22fd25](https://github.com/ng-alain/delon/commit/e22fd259699c9c065604ac1624a3009e548421da))
* **abc:st:** fix not specifying key should use index instead in statistical ([#908](https://github.com/ng-alain/delon/issues/908)) ([1de4383](https://github.com/ng-alain/delon/commit/1de438366e9ac57340c4c2a3bb9f6b51a01e0486))
* **form:** fix button & form misalignment in inline mode ([#904](https://github.com/ng-alain/delon/issues/904)) ([e869da0](https://github.com/ng-alain/delon/commit/e869da0c0ddc5349593fb3beb432df511f9cf438))
* **theme:menu.service:** fix invald recursive hit when is hash location strategy ([#906](https://github.com/ng-alain/delon/issues/906)) ([47b8bc7](https://github.com/ng-alain/delon/commit/47b8bc78e31e51beae083e2a50ab894d331ff58f))


### Features

* **abc:sidebar-nav:** unlimited levels ([#910](https://github.com/ng-alain/delon/issues/910)) ([81b5422](https://github.com/ng-alain/delon/commit/81b54220cc7d14e47be92c009238ee8cf29bd80b))
* **abc:st:** auto generate compose method when `sort: true` ([#907](https://github.com/ng-alain/delon/issues/907)) ([8e1657a](https://github.com/ng-alain/delon/commit/8e1657ace1efed132038d34588f71189c98d39d8))
* **chart:water-wave:** add `animate` property ([#918](https://github.com/ng-alain/delon/issues/918)) ([7ae1f35](https://github.com/ng-alain/delon/commit/7ae1f3576409d12844fdaec3d075d03bc42e6e69))
* **form:** add `compact` property ([#917](https://github.com/ng-alain/delon/issues/917)) ([cc11212](https://github.com/ng-alain/delon/commit/cc1121236a4f3f405526a624225af8b6b9a1202d))
* **form:widget:array:** add callback evetns ([#905](https://github.com/ng-alain/delon/issues/905)) ([31b031d](https://github.com/ng-alain/delon/commit/31b031d35ed277241ee6a682250ad0273a27734a))



## [9.2.4](https://github.com/ng-alain/delon/compare/9.2.3...9.2.4) (2020-05-15)


### Bug Fixes

* **abc:lodop:** fix unable to attach `LODOP.NEWPAGE();` this kind of code ([#902](https://github.com/ng-alain/delon/issues/902)) ([8022a66](https://github.com/ng-alain/delon/commit/8022a66c863d48d9cee81939e4f2ed96e246f9f4))
* **abc:st:** fix invalid link break in strict mode ([#900](https://github.com/ng-alain/delon/issues/900)) ([a12cf4f](https://github.com/ng-alain/delon/commit/a12cf4f36c16691b5904d47956ac2527aa117ba3))
* **cli:ng-add:** fix invalid parameter in catchError ([#901](https://github.com/ng-alain/delon/issues/901)) ([a6d6ee3](https://github.com/ng-alain/delon/commit/a6d6ee33f449b7597fbedee8655c51275598db85))
* **cli:plugin:ie:** fix modifiy invalid file ([#898](https://github.com/ng-alain/delon/issues/898)) ([b3de732](https://github.com/ng-alain/delon/commit/b3de7321661dc2664832f0be78c007f0231bf8a1))



## [9.2.3](https://github.com/ng-alain/delon/compare/9.2.2...9.2.3) (2020-05-14)


### Bug Fixes

* **form:** fix misalignment in fixed label ([#895](https://github.com/ng-alain/delon/issues/895)) ([702a485](https://github.com/ng-alain/delon/commit/702a4859ca093eca35675e7ba18b8f3288fc0990))



## [9.2.2](https://github.com/ng-alain/delon/compare/9.2.1...9.2.2) (2020-05-12)


### Bug Fixes

* **abc:lodop:** fix lodop definition ([#887](https://github.com/ng-alain/delon/issues/887)) ([aa80730](https://github.com/ng-alain/delon/commit/aa80730b2a5dfe7d3b93054a80c84f85fc81f6b9))
* **abc:st:** fix invalid fixed column ([#892](https://github.com/ng-alain/delon/issues/892)) ([b3453c5](https://github.com/ng-alain/delon/commit/b3453c54edb45f476c733ee87638327b72918a41))
* **abc:st:** fix invalid highlight when filter has set ([#889](https://github.com/ng-alain/delon/issues/889)) ([c9b374d](https://github.com/ng-alain/delon/commit/c9b374d476cd8c67cd361b651b8a3f1bed6d16cb))
* **cli:plugin:ie:** fix invalid version number of dependencies ([#888](https://github.com/ng-alain/delon/issues/888)) ([35de0d0](https://github.com/ng-alain/delon/commit/35de0d000d3aa5d15742218dede050df9007b1a0))
* **sf:widget:date:** fix format default value when value is not null ([#890](https://github.com/ng-alain/delon/issues/890)) ([bedd102](https://github.com/ng-alain/delon/commit/bedd10283d020b0aaf02bf26d173c7d53cc6f751))
* **theme:style:utils:** fix `flex-center-between` ([#886](https://github.com/ng-alain/delon/issues/886)) ([2b3f998](https://github.com/ng-alain/delon/commit/2b3f9983006dfe174dfd46bd6b1f8c355512621c))



## [9.2.1](https://github.com/ng-alain/delon/compare/9.2.0...9.2.1) (2020-05-06)


### Bug Fixes

* **abc:page-header:** remove debug info ([#883](https://github.com/ng-alain/delon/issues/883)) ([48702ac](https://github.com/ng-alain/delon/commit/48702ac87a0b16cc8befc57d4e664681bc64323f))


### Features

* **abc:st:** add `enum` type ([#884](https://github.com/ng-alain/delon/issues/884)) ([41e25d5](https://github.com/ng-alain/delon/commit/41e25d5e07fce59aa2f17c3d2c4c879004b35dee))



# [9.2.0](https://github.com/ng-alain/delon/compare/9.1.0...9.2.0) (2020-05-06)


### Bug Fixes

* **abc:page-header:** fix can't generate breadcrumb when route include params ([#881](https://github.com/ng-alain/delon/issues/881)) ([3b1a6e3](https://github.com/ng-alain/delon/commit/3b1a6e3d7c5904f0d696bfb985bec006a53733a8))
* **abc:st:** fix missing border when custom body of nest table ([#872](https://github.com/ng-alain/delon/issues/872)) ([626b143](https://github.com/ng-alain/delon/commit/626b1433f5b404895816ebd2f77f82253f36945d))
* **cli:ng-add:** fix lose component import ([#873](https://github.com/ng-alain/delon/issues/873)) ([fbc09d1](https://github.com/ng-alain/delon/commit/fbc09d188c0b9b8ab496534881141224b9454eb5))
* **theme:drawer:** fix bottom margin spacing ([#871](https://github.com/ng-alain/delon/issues/871)) ([7ae744e](https://github.com/ng-alain/delon/commit/7ae744e3b80b660305d61b7eb7b7f4820c1df10f))
* **util:lazy:** add `loading` status when load is non-complete ([#874](https://github.com/ng-alain/delon/issues/874)) ([05ce8a8](https://github.com/ng-alain/delon/commit/05ce8a863778e750e3336ff8a0be84e6e759bc52))


### Features

* **abc:qr:** add lazy load libary ([#875](https://github.com/ng-alain/delon/issues/875)) ([6009ae2](https://github.com/ng-alain/delon/commit/6009ae25d1aa2d8e873482216cbf36caf8886ac1))
* **abc:st:** add group column ([#877](https://github.com/ng-alain/delon/issues/877)) ([1b96516](https://github.com/ng-alain/delon/commit/1b965164e3391d76c8dd9b9d4e7c974f8083e4be))
* **auth:** add cookie storage ([#876](https://github.com/ng-alain/delon/issues/876)) ([f6fe116](https://github.com/ng-alain/delon/commit/f6fe1165eedd62bd14739b63e8ce9a1d305e6e35))
* **sf:widget:object:** add card style ([#879](https://github.com/ng-alain/delon/issues/879)) ([702e641](https://github.com/ng-alain/delon/commit/702e64130775816d058fddd468978f3ab0e3c101))



# [9.1.0](https://github.com/ng-alain/delon/compare/9.0.1...9.1.0) (2020-05-01)


### Bug Fixes

* **abc:st:** fix style misplacement when expand is true ([#860](https://github.com/ng-alain/delon/issues/860)) ([773f546](https://github.com/ng-alain/delon/commit/773f54656d5a6c55be203f0183ebbf1f794ed316))
* **abc:st:** fix unable to display loading when call `load` ([#858](https://github.com/ng-alain/delon/issues/858)) ([020393d](https://github.com/ng-alain/delon/commit/020393d496dcb4bb2e96be191d8bf517a36de8ee))
* **form:** fix default date-time format is invalid iso8601 value ([#864](https://github.com/ng-alain/delon/issues/864)) ([25cb0ee](https://github.com/ng-alain/delon/commit/25cb0eec57bdb0e9428b68ffee02199196f29b61))
* **sf:widget:autocomplete:** fix widget using `ngAfterViewInit` event will be overwrite ([#867](https://github.com/ng-alain/delon/issues/867)) ([a47cfe6](https://github.com/ng-alain/delon/commit/a47cfe66411fb64ce5c7ee84054d5687209cfd05))
* **theme:yn:** fix unable to select parameters ([#866](https://github.com/ng-alain/delon/issues/866)) ([fa9d0ea](https://github.com/ng-alain/delon/commit/fa9d0eae8756df8110a3ded2be04c3557a9ef3e5))
* remove console.log ([#862](https://github.com/ng-alain/delon/issues/862)) ([e15cf62](https://github.com/ng-alain/delon/commit/e15cf625b0129c60fac8eeeb525b29051064f998))
* **theme:default:** fix search icon misplacement ([#857](https://github.com/ng-alain/delon/issues/857)) ([32a6ab4](https://github.com/ng-alain/delon/commit/32a6ab4364b27576a13c19abe1232c2031079107))


### Features

* **abc:media:** add `media` component ([#859](https://github.com/ng-alain/delon/issues/859)) ([5009c5d](https://github.com/ng-alain/delon/commit/5009c5de5d4ba20c8e5a4abaa40a6b54e3290871))
* **form:** sync property of ng-zorro components ([#868](https://github.com/ng-alain/delon/issues/868)) ([f6bbf63](https://github.com/ng-alain/delon/commit/f6bbf63c0a699eecb0bebea2f4a22d5422aa09ca))



## [9.0.1](https://github.com/ng-alain/delon/compare/9.0.0...9.0.1) (2020-04-27)


### Bug Fixes

* fix support ISO 8601 ([#852](https://github.com/ng-alain/delon/issues/852)) ([ff07adc](https://github.com/ng-alain/delon/commit/ff07adc159c6026cc4e237dccf9f5218df560b21))
* **cli:** should be remove g2 in `ng update` ([#853](https://github.com/ng-alain/delon/issues/853)) ([cd0df52](https://github.com/ng-alain/delon/commit/cd0df52a2a850d64b2a8393a057927127da8e5cd))
* **cli:plugin:ie:** add `ie` plugin ([#855](https://github.com/ng-alain/delon/issues/855)) ([b033c81](https://github.com/ng-alain/delon/commit/b033c81e2eddbcd32f1a312d87ca4cd1cd5d777e))



# [9.0.0](https://github.com/ng-alain/delon/compare/9.0.0-rc.4...9.0.0) (2020-04-26)


### Bug Fixes

* **cli:** fix `ng-update` ([#849](https://github.com/ng-alain/delon/issues/849)) ([bd32b1f](https://github.com/ng-alain/delon/commit/bd32b1f5870eab8cb24e0ad4c739927ca28a1643))
* fix invalid date via date-fns ([#846](https://github.com/ng-alain/delon/issues/846)) ([37a2c7a](https://github.com/ng-alain/delon/commit/37a2c7a9039b50162e1b38e702d22ae930cebb3a)), closes [#841](https://github.com/ng-alain/delon/issues/841)


### Features

* **cli:** add `ng update ng-alain` ([#847](https://github.com/ng-alain/delon/issues/847)) ([c097f89](https://github.com/ng-alain/delon/commit/c097f895508e8f3b892ea4551a79cf4daf386888))



# [9.0.0-rc.4](https://github.com/ng-alain/delon/compare/9.0.0-rc.3...9.0.0-rc.4) (2020-04-24)


### Bug Fixes

* **abc:se:** fix `se-title` misalignment ([#840](https://github.com/ng-alain/delon/issues/840)) ([a44b9e6](https://github.com/ng-alain/delon/commit/a44b9e6619d87ce96550f2d4e4a2f34238e6b361))
* **abc:st:** fix invalid expand ([#842](https://github.com/ng-alain/delon/issues/842)) ([cfe14c4](https://github.com/ng-alain/delon/commit/cfe14c410c33fea192e61bb06b2a0c40856f7491))
* **cli:** use `style` instead of `styleext` ([#837](https://github.com/ng-alain/delon/issues/837)) ([0d9704f](https://github.com/ng-alain/delon/commit/0d9704f11db3afe6a3c676488aedc0626d76f7b6))


### Code Refactoring

* refactor global config ([#839](https://github.com/ng-alain/delon/issues/839)) ([a1903aa](https://github.com/ng-alain/delon/commit/a1903aae6dda4f031f5f2ad7be3aaff25fa31ab1))


### Features

* **chart:time-line:** add `maxAxis` property ([#838](https://github.com/ng-alain/delon/issues/838)) ([fa40822](https://github.com/ng-alain/delon/commit/fa40822932308db78c893e746992ba7b38f97de1))


### BREAKING CHANGES

* All is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config



# [9.0.0-rc.3](https://github.com/ng-alain/delon/compare/9.0.0-rc.2...9.0.0-rc.3) (2020-04-21)


### Bug Fixes

* **cli:** add `widget` of `st` ([#828](https://github.com/ng-alain/delon/issues/828)) ([abc541a](https://github.com/ng-alain/delon/commit/abc541ad63e2397d0abc7ffe1a1c90a8e71d1c29))
* **cli:** fix Invalid "extends" configuration value ([#824](https://github.com/ng-alain/delon/issues/824)) ([68b56c4](https://github.com/ng-alain/delon/commit/68b56c4226d6016ece6d0de00696f263af85294e))
* **form:** fix update value and validity when removing the last… ([#829](https://github.com/ng-alain/delon/issues/829)) ([6ff3db5](https://github.com/ng-alain/delon/commit/6ff3db5fdb24fa4da08ff672d5d3c553fd654186))
* **form:** fix width is not aligned in fixed label width ([#825](https://github.com/ng-alain/delon/issues/825)) ([c4682fa](https://github.com/ng-alain/delon/commit/c4682faea59c726b5c82b99254b2157f5fec72d6))
* **form:widget:date:** fix format default value ([#833](https://github.com/ng-alain/delon/issues/833)) ([92821b0](https://github.com/ng-alain/delon/commit/92821b047c96cff5a67365a1a32300bad7c76e05))
* **form:widget:date:** fix invalid end date when clean date ([#831](https://github.com/ng-alain/delon/issues/831)) ([04e6983](https://github.com/ng-alain/delon/commit/04e698350d8b190f8578821927e5edd796df7050))
* **module:all:** fix enableIvy:false ([#826](https://github.com/ng-alain/delon/issues/826)) ([f0a9443](https://github.com/ng-alain/delon/commit/f0a9443c8191a69b334a7f6ae935ef1092b69326))


### Features

* **abc:st:** add `widget` type ([#827](https://github.com/ng-alain/delon/issues/827)) ([4d5a767](https://github.com/ng-alain/delon/commit/4d5a767d94a248908465e59a6af9eae110205b68))
* **mock:** add `copy` property ([#821](https://github.com/ng-alain/delon/issues/821)) ([16d0146](https://github.com/ng-alain/delon/commit/16d0146234be9031889e70b6d67fa030c7511b03))


### Performance Improvements

* performance depreation ([#823](https://github.com/ng-alain/delon/issues/823)) ([4bac6d2](https://github.com/ng-alain/delon/commit/4bac6d2c9914cccaa6937d7d7b62504629207d80))



# [9.0.0-rc.2](https://github.com/ng-alain/delon/compare/9.0.0-rc.1...9.0.0-rc.2) (2020-04-19)


### Bug Fixes

* fix DI compatible lvy ([#819](https://github.com/ng-alain/delon/issues/819)) ([6f9bba5](https://github.com/ng-alain/delon/commit/6f9bba5895b2be17907f0faf7451ae73ff38625d))
* **chart:tag-cloud:** fix overlap ([#816](https://github.com/ng-alain/delon/issues/816)) ([7f31648](https://github.com/ng-alain/delon/commit/7f3164875372dac9358a2349e76fa8e2d988ca84))
* **chart:timeline:** fix slider date format is incorrect ([#817](https://github.com/ng-alain/delon/issues/817)) ([1284553](https://github.com/ng-alain/delon/commit/12845534bef3df2f7f75aa162e036b6cd20912c5))


### Features

* **chart:custom:** add `delay` property ([#818](https://github.com/ng-alain/delon/issues/818)) ([07e59fb](https://github.com/ng-alain/delon/commit/07e59fb5f1bdd1d51660510d34d45b968341faa9))



# [9.0.0-rc.1](https://github.com/ng-alain/delon/compare/8.9.2...9.0.0-rc.1) (2020-04-18)


### Features

* **abc:se:** add `TemplateRef<void>` in `label`, `error`, `extr… ([#803](https://github.com/ng-alain/delon/issues/803)) ([eb13170](https://github.com/ng-alain/delon/commit/eb131704a374a9ea84803c20dde9836ec78549ee))
* **abc:se:** add auto `required` based on the control element ([#799](https://github.com/ng-alain/delon/issues/799)) ([1d4dad5](https://github.com/ng-alain/delon/commit/1d4dad559743091be1f85ed43757c2c0e20ba3ee))
* **abc:sidebar-nav:** can be set 3 levels icon ([#801](https://github.com/ng-alain/delon/issues/801)) ([087b8e9](https://github.com/ng-alain/delon/commit/087b8e9a94e1ae08a88461faecf2ef606dfa0dd1))
* **abc:st:** add enforce control to top via `reset`, `load` met… ([#800](https://github.com/ng-alain/delon/issues/800)) ([4a8bfb0](https://github.com/ng-alain/delon/commit/4a8bfb0ee34cfac5bbc71c3b9ce6c56f2bcb2c70))
* **theme:** add Japanese language files ([#730](https://github.com/ng-alain/delon/issues/730)) ([5efbe5b](https://github.com/ng-alain/delon/commit/5efbe5b52917fc3981009d76b53536924a6bb680))

## 8.9.2 (2020-04-07)


### Bug Fixes

* **abc:page-header:** fix missing import of `@angular/cdk/observ… ([#789](https://github.com/ng-alain/delon/issues/789)) ([d4566d7](https://github.com/ng-alain/delon/commit/d4566d71e31a3a8a3ce59627709ed86db2d2e5b1))
* **abc:st:** fix unabled to render `yn` type ([#786](https://github.com/ng-alain/delon/issues/786)) ([e16e02f](https://github.com/ng-alain/delon/commit/e16e02f0175ac89c9a70a51a728ca8ce7ecc74d7))
* **theme:title:** fix can't set comment node as title ([#793](https://github.com/ng-alain/delon/issues/793)) ([8b34f60](https://github.com/ng-alain/delon/commit/8b34f60fa5b081f37f1a5a7db5a4db8d69f48964))


### Features

* **form:string:** add `change`, `focus`, `blur`, `enter` event ([#790](https://github.com/ng-alain/delon/issues/790)) ([29373c4](https://github.com/ng-alain/delon/commit/29373c4d05d94d0ea4d07c504dbfdf28acf245cd))
* **theme:http:** add `form` method ([#787](https://github.com/ng-alain/delon/issues/787)) ([2edfd58](https://github.com/ng-alain/delon/commit/2edfd5868135750e67c195669bafc2f741e2952e))



## 8.9.2 (2020-04-07)


### Bug Fixes

* **abc:page-header:** fix missing import of `@angular/cdk/observ… ([#789](https://github.com/ng-alain/delon/issues/789)) ([d4566d7](https://github.com/ng-alain/delon/commit/d4566d71e31a3a8a3ce59627709ed86db2d2e5b1))
* **abc:st:** fix text overflow in mobile screen ([#781](https://github.com/ng-alain/delon/issues/781)) ([a055b93](https://github.com/ng-alain/delon/commit/a055b93647d3aa7116162293947c6527643512e1))
* **abc:st:** fix unabled to render `yn` type ([#786](https://github.com/ng-alain/delon/issues/786)) ([e16e02f](https://github.com/ng-alain/delon/commit/e16e02f0175ac89c9a70a51a728ca8ce7ecc74d7))
* **form:widget:upload:** fix hide button when limit upload count ([#784](https://github.com/ng-alain/delon/issues/784)) ([acc2347](https://github.com/ng-alain/delon/commit/acc234793760163d259ceb32f48383e082b72e3f))
* **sf:widget:number:** specify widget width via `widgetWidth` property ([#782](https://github.com/ng-alain/delon/issues/782)) ([d2d3557](https://github.com/ng-alain/delon/commit/d2d3557dc8d3d226c8d1c566e272e1ddd9d47eb9))
* **theme:menu:** fix can't hited when route include queryString ([#783](https://github.com/ng-alain/delon/issues/783)) ([9c9af73](https://github.com/ng-alain/delon/commit/9c9af73258f79c42be8ced9aca35699dc95b9e7c))


### Features

* **form:string:** add `change`, `focus`, `blur`, `enter` event ([#790](https://github.com/ng-alain/delon/issues/790)) ([29373c4](https://github.com/ng-alain/delon/commit/29373c4d05d94d0ea4d07c504dbfdf28acf245cd))
* **theme:http:** add `form` method ([#787](https://github.com/ng-alain/delon/issues/787)) ([2edfd58](https://github.com/ng-alain/delon/commit/2edfd5868135750e67c195669bafc2f741e2952e))



## 8.9.1 (2020-04-03)


### Bug Fixes

* **abc:st:** fix text overflow in mobile screen ([#781](https://github.com/ng-alain/delon/issues/781)) ([a055b93](https://github.com/ng-alain/delon/commit/a055b93647d3aa7116162293947c6527643512e1))
* **form:widget:upload:** fix hide button when limit upload count ([#784](https://github.com/ng-alain/delon/issues/784)) ([acc2347](https://github.com/ng-alain/delon/commit/acc234793760163d259ceb32f48383e082b72e3f))
* **sf:widget:number:** specify widget width via `widgetWidth` property ([#782](https://github.com/ng-alain/delon/issues/782)) ([d2d3557](https://github.com/ng-alain/delon/commit/d2d3557dc8d3d226c8d1c566e272e1ddd9d47eb9))
* **theme:menu:** fix can't hited when route include queryString ([#783](https://github.com/ng-alain/delon/issues/783)) ([9c9af73](https://github.com/ng-alain/delon/commit/9c9af73258f79c42be8ced9aca35699dc95b9e7c))



# [8.9.0](https://github.com/ng-alain/delon/compare/8.8.0...8.9.0) (2020-02-19)


### Bug Fixes

* **abc:sidebar:** fix badge overflow ([#769](https://github.com/ng-alain/delon/issues/769)) ([7dc834e](https://github.com/ng-alain/delon/commit/7dc834ede2dc0d0d43d84a7c1ebbc47ddfc94209))
* **abc:st:** fix invalid default value of `date` type ([#765](https://github.com/ng-alain/delon/issues/765)) ([a971ac0](https://github.com/ng-alain/delon/commit/a971ac0f5a7729ae8da2d2e6dffbb37e790a3f1e))
* **abc:st:** fix lose `dblClick` in `STChange` ([#763](https://github.com/ng-alain/delon/issues/763)) ([153558b](https://github.com/ng-alain/delon/commit/153558b3ed74aa335bd0690f2dd238aed259f544))
* **cli:** fix unknown options ([#762](https://github.com/ng-alain/delon/issues/762)) ([4dddcb0](https://github.com/ng-alain/delon/commit/4dddcb075054e9674157578da09520766531c82f))
* **cli:** only supports angular 8.x ([#773](https://github.com/ng-alain/delon/issues/773)) ([2568480](https://github.com/ng-alain/delon/commit/25684801cdd065688a205c4595dd1c1b6f21b23b))
* **form:array:** fix invalid error when removed item ([#772](https://github.com/ng-alain/delon/issues/772)) ([ad2a3e6](https://github.com/ng-alain/delon/commit/ad2a3e663af16ffc91af590b71e18936087dfced))
* **form:date:** fix can't custom end format ([#770](https://github.com/ng-alain/delon/issues/770)) ([8d3fed1](https://github.com/ng-alain/delon/commit/8d3fed1127ff82b579d2b2a2318610ab97bfdd9e))
* **theme:** fix disabled & flex css class ([#764](https://github.com/ng-alain/delon/issues/764)) ([842e9d8](https://github.com/ng-alain/delon/commit/842e9d8b42169bf6cdb9409ecea6f8e3fe2d7b0e))
* **theme:_HtpClient:** fix loading status invalid when not subsc… ([#774](https://github.com/ng-alain/delon/issues/774)) ([770ec8b](https://github.com/ng-alain/delon/commit/770ec8b3b9d381cf229e8f1ffd5c8926cc18487c))


### Features

* **abc:down-file:** add `http-body` property ([#768](https://github.com/ng-alain/delon/issues/768)) ([748f7e1](https://github.com/ng-alain/delon/commit/748f7e12dfd736f579340c9e777b9fe159080741))
* **abc:st:** add `count`, `list` properites of component ([#767](https://github.com/ng-alain/delon/issues/767)) ([21eec5b](https://github.com/ng-alain/delon/commit/21eec5b1ace7dc88e5ba41e12a5d82fa0412be15))



# [8.8.0](https://github.com/ng-alain/delon/compare/8.7.3...8.8.0) (2019-12-30)


### Bug Fixes

* **abc:sidebar-nav:** fix keeping expand when changed route in enabled `openStrictly` ([#759](https://github.com/ng-alain/delon/issues/759)) ([a7ab84a](https://github.com/ng-alain/delon/commit/a7ab84a1b98a7e714afd6c44c5ef13c02a093d7e))
* **abc:st:** fix filter misalignment ([#754](https://github.com/ng-alain/delon/issues/754)) ([7236e70](https://github.com/ng-alain/delon/commit/7236e70ab73838cb69173ccb53ba992e54852d8e))
* **cli:plugin:docker:** fix lower version of node ([#753](https://github.com/ng-alain/delon/issues/753)) ([6ce6eb6](https://github.com/ng-alain/delon/commit/6ce6eb668af8bca0e2d591abf7b54f2e19ef6722))
* **cli:plugin:icon:** fix multi-project pollution ([#752](https://github.com/ng-alain/delon/issues/752)) ([889d75a](https://github.com/ng-alain/delon/commit/889d75af9b330a6deb6ebbe91b4873ec611f2cab))


### Features

* **abc:down-file:** support custom file name ([#757](https://github.com/ng-alain/delon/issues/757)) ([bafb44c](https://github.com/ng-alain/delon/commit/bafb44cbfdcad73eb9bfed6a155b089e7c77c3e6))
* **abc:loading:** add global loading indicator ([#755](https://github.com/ng-alain/delon/issues/755)) ([8c1a6d8](https://github.com/ng-alain/delon/commit/8c1a6d8cc3f041d82007ef4641fe5f641730df5d))



## [8.7.3](https://github.com/ng-alain/delon/compare/8.7.2...8.7.3) (2019-12-20)


### Bug Fixes

* **abc:se:** fix misplaced labels on small screens ([#744](https://github.com/ng-alain/delon/issues/744)) ([1f141a5](https://github.com/ng-alain/delon/commit/1f141a5ded2b8727a0d505057cdc17e04899036c))
* **abc:sidebar-nav:** fix can't click text in collapsed mode ([#749](https://github.com/ng-alain/delon/issues/749)) ([c502017](https://github.com/ng-alain/delon/commit/c5020175ab7e817dac41076a53e9da1cccb4995c))
* **form:** fix shoule be inherit ui properites of array property ([#747](https://github.com/ng-alain/delon/issues/747)) ([0c02bb6](https://github.com/ng-alain/delon/commit/0c02bb6846cc3f7e96c5aa30748177bfd8c5916e)), closes [#745](https://github.com/ng-alain/delon/issues/745)
* **theme:http.decorator:** fix unable to send array response body ([#746](https://github.com/ng-alain/delon/issues/746)) ([3855838](https://github.com/ng-alain/delon/commit/3855838b8e8ab2c3468d77267c5643e8ce5fa32a))



## [8.7.2](https://github.com/ng-alain/delon/compare/8.7.1...8.7.2) (2019-12-16)


### Bug Fixes

* **abc:sidebar-nav:** fix invalide tooltip render ([#736](https://github.com/ng-alain/delon/issues/736)) ([7de70b2](https://github.com/ng-alain/delon/commit/7de70b2642cc063c0d1978df770cb16057f0b07b))
* **abc:sidebar-nav:** fix not found `[@alain-default-aside](https://github.com/alain-default-aside)-*` var… ([#740](https://github.com/ng-alain/delon/issues/740)) ([8bd3729](https://github.com/ng-alain/delon/commit/8bd3729107e67c2bc0239effb302e680ed5bdca1))
* **abc:sv,se:** fix spacing between option and Icon ([#741](https://github.com/ng-alain/delon/issues/741)) ([1ab2ca5](https://github.com/ng-alain/delon/commit/1ab2ca5b38614b9f4410c0b3095e926130e1feed))



## [8.7.1](https://github.com/ng-alain/delon/compare/8.7.0...8.7.1) (2019-12-11)


### Bug Fixes

* **abc:sidebar-nav:** fix style in disabled ([#731](https://github.com/ng-alain/delon/issues/731)) ([7759299](https://github.com/ng-alain/delon/commit/7759299fa6822e98c2d1133134db74ae59dfa453))
* **abc:st:** fix duplcate title when `responsive` is `false` ([#733](https://github.com/ng-alain/delon/issues/733)) ([baab4a7](https://github.com/ng-alain/delon/commit/baab4a7a00cf737c344342e085def4e01b54a27a))
* **chart:water-wave:** fix first time unable to render ([#734](https://github.com/ng-alain/delon/issues/734)) ([cbbd573](https://github.com/ng-alain/delon/commit/cbbd573a43e404098f23c28b8ff0fb5f3beb87b3))



# [8.7.0](https://github.com/ng-alain/delon/compare/8.6.0...8.7.0) (2019-12-06)


### Bug Fixes

* **abc:st:** fix expand width value in strict mode ([#720](https://github.com/ng-alain/delon/issues/720)) ([248c27d](https://github.com/ng-alain/delon/commit/248c27d71891323975d48bfa2010805b4bab9072))


### Features

* **abc:sidebar-nav:** support html in `text` or `i18n` property ([#723](https://github.com/ng-alain/delon/issues/723)) ([d58f5b1](https://github.com/ng-alain/delon/commit/d58f5b1edb4109d5d21a2e1d7b4c1aa6fed0dca4)), closes [#716](https://github.com/ng-alain/delon/issues/716)
* **abc:st:** add `error` supports multiple types ([#721](https://github.com/ng-alain/delon/issues/721)) ([436a4e5](https://github.com/ng-alain/delon/commit/436a4e56346784e96ad2aaa4c268d3415d46f590))
* **abc:st:** add `setRow` method in component ([#725](https://github.com/ng-alain/delon/issues/725)) ([170bab2](https://github.com/ng-alain/delon/commit/170bab2a2ac9a7bbd2b92465183d711e03be8333))
* **auth:** add `onlyToken` property in `clear` method ([#717](https://github.com/ng-alain/delon/issues/717)) ([f05ab21](https://github.com/ng-alain/delon/commit/f05ab21f9cac6d9db46af3689974be19693a8058))
* **theme:MenuService:** add `getItem`, `setItem` methods ([#722](https://github.com/ng-alain/delon/issues/722)) ([2c05493](https://github.com/ng-alain/delon/commit/2c054935b94aa465dec4ef091994087fa32c053d))



# [8.6.0](https://github.com/ng-alain/delon/compare/8.5.1...8.6.0) (2019-11-15)


### Bug Fixes

* **abc:reuse-tab:** fix duplicate render list ([#707](https://github.com/ng-alain/delon/issues/707)) ([2e697af](https://github.com/ng-alain/delon/commit/2e697afd5ecea6f24bb281d56e653f9efd71a199))
* **abc:xlsx:** fix duplicate loading xlsx.js when XLSX  exists ([#705](https://github.com/ng-alain/delon/issues/705)) ([88e63a2](https://github.com/ng-alain/delon/commit/88e63a2941f5b9e6f6a26c15ed28162d90b4db4f))
* **form:array:** fix losing `optionalHelp` property ([#713](https://github.com/ng-alain/delon/issues/713)) ([8c574ef](https://github.com/ng-alain/delon/commit/8c574efd5e7f31c7d5bf82c7c861ff5bc63f945d))
* **form:checkbox:** fix losing `optionalHelp` property ([#708](https://github.com/ng-alain/delon/issues/708)) ([e3585ea](https://github.com/ng-alain/delon/commit/e3585ea9034b2b02e9160ad3dc551fe6cc8291d2))


### Features

* **abc:sv,se:** `optional`, `optionalHelp` support `TemplateRef… ([#710](https://github.com/ng-alain/delon/issues/710)) ([a456201](https://github.com/ng-alain/delon/commit/a456201ba7a4ae3df68cc4c0470aa3ee6fab86ee))
* **abc:table:** add `keepEmptyKey` of mulitisort ([#714](https://github.com/ng-alain/delon/issues/714)) ([00f998d](https://github.com/ng-alain/delon/commit/00f998d8939fde2ef2a60a54417e8ae7556e1dd4))
* **abc:table:** add `loaded` type event of `change` ([#709](https://github.com/ng-alain/delon/issues/709)) ([6d3f017](https://github.com/ng-alain/delon/commit/6d3f0171c97a7f8c45ea3c3f799079506df3ffbf))
* **cli:** add cnpm reminder ([#704](https://github.com/ng-alain/delon/issues/704)) ([9e131d7](https://github.com/ng-alain/delon/commit/9e131d76276120725a574859f33b9130aa31c6a5))
* **form:** add `cleanValue` property ([#711](https://github.com/ng-alain/delon/issues/711)) ([7e55136](https://github.com/ng-alain/delon/commit/7e55136768578df5f054948df6ad2ca4c2a942e1))
* **form:** add `noColon` property ([#698](https://github.com/ng-alain/delon/issues/698)) ([2c34460](https://github.com/ng-alain/delon/commit/2c34460226818d1bc78ad7e62790ff4a32eb2791))



## [8.5.1](https://github.com/ng-alain/delon/compare/8.5.0...8.5.1) (2019-10-28)


### Bug Fixes

* **abc:reuse-tab:** fix style in card type ([#701](https://github.com/ng-alain/delon/issues/701)) ([8eaa89d](https://github.com/ng-alain/delon/commit/8eaa89d))
* **abc:st:** shoule be auto 100% width when not specified ([#700](https://github.com/ng-alain/delon/issues/700)) ([36a95f6](https://github.com/ng-alain/delon/commit/36a95f6))



# [8.5.0](https://github.com/ng-alain/delon/compare/8.4.0...8.5.0) (2019-10-12)


### Bug Fixes

* **abc:sidebar-nav:** fix repeat render item in external link ([#688](https://github.com/ng-alain/delon/issues/688)) ([fbf52c4](https://github.com/ng-alain/delon/commit/fbf52c4))
* **abc:st:** fix ingore invalid `tag` or `badge` ([#687](https://github.com/ng-alain/delon/issues/687)) ([3752205](https://github.com/ng-alain/delon/commit/3752205))
* **abc:st:** fix render null value in export to excel ([#689](https://github.com/ng-alain/delon/issues/689)) ([2aef5a9](https://github.com/ng-alain/delon/commit/2aef5a9))
* **abc:st:** should be stop propagation in button event when `ex… ([#692](https://github.com/ng-alain/delon/issues/692)) ([da8d99d](https://github.com/ng-alain/delon/commit/da8d99d))
* **sf:cascader:** removed `select` event, muse be use `selection… ([#684](https://github.com/ng-alain/delon/issues/684)) ([1ed0ae1](https://github.com/ng-alain/delon/commit/1ed0ae1))


### Features

* **abc:reuse-tab:** add `tabMaxWidth` property ([#690](https://github.com/ng-alain/delon/issues/690)) ([19cc818](https://github.com/ng-alain/delon/commit/19cc818))
* **abc:st:** add `divider` type in button ([#683](https://github.com/ng-alain/delon/issues/683)) ([d9f6014](https://github.com/ng-alain/delon/commit/d9f6014))
* **form:autocomplete:** add `change` event ([#691](https://github.com/ng-alain/delon/issues/691)) ([f4215e4](https://github.com/ng-alain/delon/commit/f4215e4))
* **module:theme:** adding Croatian locale ([#695](https://github.com/ng-alain/delon/issues/695)) ([a1d69ba](https://github.com/ng-alain/delon/commit/a1d69ba))
* **theme:http:** add `@Payload` decorator ([#686](https://github.com/ng-alain/delon/issues/686)) ([123c29e](https://github.com/ng-alain/delon/commit/123c29e))



# [8.4.0](https://github.com/ng-alain/delon/compare/8.3.0...8.4.0) (2019-09-01)


### Bug Fixes

* **abc:sidebar-nav:** fix invalid click children title in collap… ([#673](https://github.com/ng-alain/delon/issues/673)) ([b6c1fc6](https://github.com/ng-alain/delon/commit/b6c1fc6))
* **abc:sidebar-nav:** fix style misplacement ([#677](https://github.com/ng-alain/delon/issues/677)) ([efd9bb1](https://github.com/ng-alain/delon/commit/efd9bb1))
* **abc:st:** fix ingored incomplete request when has new request ([#674](https://github.com/ng-alain/delon/issues/674)) ([c98ae19](https://github.com/ng-alain/delon/commit/c98ae19))
* **abc:st:** fix invalid title in export ([#672](https://github.com/ng-alain/delon/issues/672)) ([48ca08f](https://github.com/ng-alain/delon/commit/48ca08f))
* **abc:sv:** fix `labelWidth` type ([#668](https://github.com/ng-alain/delon/issues/668)) ([43cf770](https://github.com/ng-alain/delon/commit/43cf770))


### Features

* **abc:st:** add `pop` property ([#676](https://github.com/ng-alain/delon/issues/676)) ([a078f02](https://github.com/ng-alain/delon/commit/a078f02))
* **cache:** add `type`, `expire` in `DelonCacheConfig` ([#669](https://github.com/ng-alain/delon/issues/669)) ([9d393fb](https://github.com/ng-alain/delon/commit/9d393fb))



# [8.3.0](https://github.com/ng-alain/delon/compare/8.2.0...8.3.0) (2019-08-03)


### Bug Fixes

* **abc:reuse-tab:** should be always get title from  menu data ([#661](https://github.com/ng-alain/delon/issues/661)) ([6e63418](https://github.com/ng-alain/delon/commit/6e63418))
* **abc:sidebar:** fix invalid subnode when include badge value i… ([#665](https://github.com/ng-alain/delon/issues/665)) ([763a27e](https://github.com/ng-alain/delon/commit/763a27e))
* **abc:st:** fix ignore catch error of http request when component is destroyed ([#658](https://github.com/ng-alain/delon/issues/658)) ([6bd97eb](https://github.com/ng-alain/delon/commit/6bd97eb))
* **theme:title:** should be avoid can't get title when rendered componet in `NavigationEnd` event ([#660](https://github.com/ng-alain/delon/issues/660)) ([0db451d](https://github.com/ng-alain/delon/commit/0db451d))


### Features

* **abc:st:** add `lazyLoad` property in `req` ([#656](https://github.com/ng-alain/delon/issues/656)) ([4ae8f13](https://github.com/ng-alain/delon/commit/4ae8f13))
* **abc:st:** add `STColumnTitle` type of `title` property` ([#657](https://github.com/ng-alain/delon/issues/657)) ([9408ccc](https://github.com/ng-alain/delon/commit/9408ccc))
* **acl:** support specify guard fail url in router data ([#666](https://github.com/ng-alain/delon/issues/666)) ([bee66fd](https://github.com/ng-alain/delon/commit/bee66fd))
* **form:*:** support date-fns format in `date`, `time` widgets ([#663](https://github.com/ng-alain/delon/issues/663)) ([ba91193](https://github.com/ng-alain/delon/commit/ba91193))



# [8.2.0](https://github.com/ng-alain/delon/compare/8.1.0...8.2.0) (2019-07-20)


### Bug Fixes

* **abc:*:** fix `sv`, `se` title styles ([#651](https://github.com/ng-alain/delon/issues/651)) ([d92a21d](https://github.com/ng-alain/delon/commit/d92a21d))
* **auth:** fix `referrer.url` should be always latest router url ([#654](https://github.com/ng-alain/delon/issues/654)) ([89098e1](https://github.com/ng-alain/delon/commit/89098e1))


### Features

* **abc:reuse-tab:** add `tabType` property ([#652](https://github.com/ng-alain/delon/issues/652)) ([9da990f](https://github.com/ng-alain/delon/commit/9da990f))



# [8.1.0](https://github.com/ng-alain/delon/compare/8.0.0...8.1.0) (2019-07-12)


### Bug Fixes

* **abc:st:** fix losing default page config ([#649](https://github.com/ng-alain/delon/issues/649)) ([8f59ea2](https://github.com/ng-alain/delon/commit/8f59ea2))
* **form:** fix losing inherit of `ui` property value ([#647](https://github.com/ng-alain/delon/issues/647)) ([f2df673](https://github.com/ng-alain/delon/commit/f2df673))
* **form:** fix missing style of widget item ([#646](https://github.com/ng-alain/delon/issues/646)) ([fe2f0fe](https://github.com/ng-alain/delon/commit/fe2f0fe))
* **theme:menu:** fix can be choose one of `text` or `i18n` ([#648](https://github.com/ng-alain/delon/issues/648)) ([3200998](https://github.com/ng-alain/delon/commit/3200998))


### Features

* **abc:st:** add `index` argument of `format` ([#644](https://github.com/ng-alain/delon/issues/644)) ([498d0b7](https://github.com/ng-alain/delon/commit/498d0b7))
* **cli:** add proxying to a backend server ([#645](https://github.com/ng-alain/delon/issues/645)) ([10c91d8](https://github.com/ng-alain/delon/commit/10c91d8))



# [8.0.0](https://github.com/ng-alain/delon/compare/8.0.0-rc.1...8.0.0) (2019-07-03)


### Bug Fixes

* **theme:style:** fix aside user style ([#639](https://github.com/ng-alain/delon/issues/639)) ([ede1d15](https://github.com/ng-alain/delon/commit/ede1d15))


### Features

* **abc:st:** add `tooltip` property in button ([#640](https://github.com/ng-alain/delon/issues/640)) ([181e3a1](https://github.com/ng-alain/delon/commit/181e3a1))



# [8.0.0-rc.1](https://github.com/ng-alain/delon/compare/8.0.0-rc.0...8.0.0-rc.1) (2019-06-29)


### Bug Fixes

* **abc:st:** ingore `title` required in `STColumn` ([#632](https://github.com/ng-alain/delon/issues/632)) ([69608c5](https://github.com/ng-alain/delon/commit/69608c5))
* **cli:plugin:icon:** fix unidentified `nzType` property ([#637](https://github.com/ng-alain/delon/issues/637)) ([2784a5a](https://github.com/ng-alain/delon/commit/2784a5a))
* **form:array:** fix disabled add & remove buttons when `readOnly` is `true` ([#633](https://github.com/ng-alain/delon/issues/633)) ([15194cc](https://github.com/ng-alain/delon/commit/15194cc))
* **form:array:** fix invalid value subscript of path value ([#628](https://github.com/ng-alain/delon/issues/628)) ([09807f7](https://github.com/ng-alain/delon/commit/09807f7))
* **form:upload:** fix invalid `showUploadList` property ([#634](https://github.com/ng-alain/delon/issues/634)) ([54c3b90](https://github.com/ng-alain/delon/commit/54c3b90))


### Features

* **abc:st:** add `emitReload` of `resetColumns` method ([#635](https://github.com/ng-alain/delon/issues/635)) ([a96123e](https://github.com/ng-alain/delon/commit/a96123e))



# [8.0.0-rc.0](https://github.com/ng-alain/delon/compare/7.7.1...8.0.0-rc.0) (2019-06-23)


### Bug Fixes

* **form:*:** fix invalid render value when call `setValue` method ([#622](https://github.com/ng-alain/delon/issues/622)) ([4cea3b7](https://github.com/ng-alain/delon/commit/4cea3b7))


### Code Refactoring

* refactor dependencies ([#616](https://github.com/ng-alain/delon/issues/616)) ([34db1dd](https://github.com/ng-alain/delon/commit/34db1dd))


### Features

* **abc:down-file:** add `down-file_not-support` & `down-file__disabled` ([#624](https://github.com/ng-alain/delon/issues/624)) ([2369153](https://github.com/ng-alain/delon/commit/2369153))
* **abc:st:** `confirmText`, `clearText` support i18n text ([#618](https://github.com/ng-alain/delon/issues/618)) ([a8cd300](https://github.com/ng-alain/delon/commit/a8cd300))
* **abc:st:** add keyword in filter ([#612](https://github.com/ng-alain/delon/issues/612)) ([543236d](https://github.com/ng-alain/delon/commit/543236d))
* **form:** `optionalHelp` support complex attributes ([#621](https://github.com/ng-alain/delon/issues/621)) ([d45fddf](https://github.com/ng-alain/delon/commit/d45fddf))
* **form:** support i18n ([#625](https://github.com/ng-alain/delon/issues/625)) ([e1bbbdb](https://github.com/ng-alain/delon/commit/e1bbbdb))
* **util:deepMergeKey:** support `null` & `undefined` of objects parament ([#620](https://github.com/ng-alain/delon/issues/620)) ([a8ddbb8](https://github.com/ng-alain/delon/commit/a8ddbb8))


### Performance Improvements

* **cli:** optimize to provide more detailed errors ([#619](https://github.com/ng-alain/delon/issues/619)) ([7ebef13](https://github.com/ng-alain/delon/commit/7ebef13))


### BREAKING CHANGES

* `DelonACLModule` muse be using `forRoot()`



## [7.7.1](https://github.com/ng-alain/delon/compare/7.7.0...7.7.1) (2019-06-17)


### Bug Fixes

* **form:select:** fix invalid value via click clean ([#611](https://github.com/ng-alain/delon/issues/611)) ([8ab8d45](https://github.com/ng-alain/delon/commit/8ab8d45))



# [7.7.0](https://github.com/ng-alain/delon/compare/7.6.1...7.7.0) (2019-06-15)


### Bug Fixes

* **abc:_src:** fix img causing infinite loop when error image still load fail ([#607](https://github.com/ng-alain/delon/issues/607)) ([09cdff0](https://github.com/ng-alain/delon/commit/09cdff0))
* **form:select:** fix invlid render group in search mode ([#602](https://github.com/ng-alain/delon/issues/602)) ([eaa774b](https://github.com/ng-alain/delon/commit/eaa774b))
* **theme:modal&drawer:** removed automatic management of `z-index` values ([#601](https://github.com/ng-alain/delon/issues/601)) ([088d306](https://github.com/ng-alain/delon/commit/088d306))


### Features

* **abc:st:** add `iifBehavior` property ([#604](https://github.com/ng-alain/delon/issues/604)) ([0cbacc1](https://github.com/ng-alain/delon/commit/0cbacc1))
* **abc:st:** add optional parameters of `resetColumns` method ([#597](https://github.com/ng-alain/delon/issues/597)) ([2d3f51d](https://github.com/ng-alain/delon/commit/2d3f51d))
* **form:** add `disabled` property ([#603](https://github.com/ng-alain/delon/issues/603)) ([d67f5cd](https://github.com/ng-alain/delon/commit/d67f5cd))



## [7.6.1](https://github.com/ng-alain/delon/compare/7.6.0...7.6.1) (2019-06-05)


### Bug Fixes

* **cli:** fix invalid translating ([#598](https://github.com/ng-alain/delon/issues/598)) ([abc9e8e](https://github.com/ng-alain/delon/commit/abc9e8e))
* **cli:** fix losing antd-theme-generator package ([#593](https://github.com/ng-alain/delon/issues/593)) ([97f0b1a](https://github.com/ng-alain/delon/commit/97f0b1a))
* **form:** fix invalid form values when call `refreshSchema` method ([#596](https://github.com/ng-alain/delon/issues/596)) ([25f2617](https://github.com/ng-alain/delon/commit/25f2617))
* **form:radio:** fix losing `nzButtonStyle` property ([#595](https://github.com/ng-alain/delon/issues/595)) ([638cffc](https://github.com/ng-alain/delon/commit/638cffc))
* **form:select:** fix losing `compareWith` property ([#594](https://github.com/ng-alain/delon/issues/594)) ([1248716](https://github.com/ng-alain/delon/commit/1248716))



# [7.6.0](https://github.com/ng-alain/delon/compare/7.5.0...7.6.0) (2019-06-02)


### Bug Fixes

* **abc:st:** fix trigger area in sub buttons ([#585](https://github.com/ng-alain/delon/issues/585)) ([3f7f9a5](https://github.com/ng-alain/delon/commit/3f7f9a5))
* **cli:** fix lint in windows ([#586](https://github.com/ng-alain/delon/issues/586)) ([1782498](https://github.com/ng-alain/delon/commit/1782498))


### Features

* **abc:st:** add `filteredData` property in component ([#588](https://github.com/ng-alain/delon/issues/588)) ([f74e589](https://github.com/ng-alain/delon/commit/f74e589))
* **abc:st:** add virtual scroll ([#590](https://github.com/ng-alain/delon/issues/590)) ([1a88bfd](https://github.com/ng-alain/delon/commit/1a88bfd))
* **form:date:** add `year` in `mode` property ([#587](https://github.com/ng-alain/delon/issues/587)) ([935b8c2](https://github.com/ng-alain/delon/commit/935b8c2))



# [7.5.0](https://github.com/ng-alain/delon/compare/7.4.0...7.5.0) (2019-05-25)


### Bug Fixes

* **abc:se:** fix losing opttional icon ([#577](https://github.com/ng-alain/delon/issues/577)) ([d9033dd](https://github.com/ng-alain/delon/commit/d9033dd))
* **form:** fix ingore trigger formChange event when call refreshSchema ([#579](https://github.com/ng-alain/delon/issues/579)) ([4f4c4f9](https://github.com/ng-alain/delon/commit/4f4c4f9))
* **form:autocomplete:** fix verify form in typing ([#580](https://github.com/ng-alain/delon/issues/580)) ([3371168](https://github.com/ng-alain/delon/commit/3371168))


### Features

* **abc:st:** add `expandAccordion` property ([#576](https://github.com/ng-alain/delon/issues/576)) ([d3dd0e4](https://github.com/ng-alain/delon/commit/d3dd0e4))
* **abc:sv:** add `optional` `optionalHelp` properittes ([#578](https://github.com/ng-alain/delon/issues/578)) ([8968ae4](https://github.com/ng-alain/delon/commit/8968ae4))
* **form:** add `acl` property ([#574](https://github.com/ng-alain/delon/issues/574)) ([54ddae9](https://github.com/ng-alain/delon/commit/54ddae9))



# [7.4.0](https://github.com/ng-alain/delon/compare/7.3.2...7.4.0) (2019-05-16)


### Bug Fixes

* **abc:sidebar:** fix invalid iconfont icon ([#568](https://github.com/ng-alain/delon/issues/568)) ([9a8ebae](https://github.com/ng-alain/delon/commit/9a8ebae))
* **abc:st:** fix ingore pi event trigger when change size in last page ([#564](https://github.com/ng-alain/delon/issues/564)) ([375d605](https://github.com/ng-alain/delon/commit/375d605))
* **abc:st:** fix responsive styles pollution `nz-table` ([#563](https://github.com/ng-alain/delon/issues/563)) ([4a78ef2](https://github.com/ng-alain/delon/commit/4a78ef2))
* **cli:** fix invalid translate in ng add ([#561](https://github.com/ng-alain/delon/issues/561)) ([add2ec0](https://github.com/ng-alain/delon/commit/add2ec0))
* **cli:** fix repeat variable suffix in `ng g ng-alain` ([#560](https://github.com/ng-alain/delon/issues/560)) ([7b8d9eb](https://github.com/ng-alain/delon/commit/7b8d9eb))
* **form:select:** fix invlaid tag count ([#571](https://github.com/ng-alain/delon/issues/571)) ([56abb18](https://github.com/ng-alain/delon/commit/56abb18))


### Features

* **abc:st:** ingore sort procees when `compare` is `null` ([#570](https://github.com/ng-alain/delon/issues/570)) ([0b625b4](https://github.com/ng-alain/delon/commit/0b625b4))
* **acl:** add `except` property in `ACLType` ([#566](https://github.com/ng-alain/delon/issues/566)) ([3787128](https://github.com/ng-alain/delon/commit/3787128))


### Performance Improvements

* **theme:http:** removed delay because all support OnPush ([9a8f21a](https://github.com/ng-alain/delon/commit/9a8f21a))



## [7.3.2](https://github.com/ng-alain/delon/compare/7.3.1...7.3.2) (2019-05-04)


### Bug Fixes

* **abc:se:** fix ingore label width when layout is inline ([#553](https://github.com/ng-alain/delon/issues/553)) ([70322fa](https://github.com/ng-alain/delon/commit/70322fa))
* **abc:st:** add `rawData` parameter of `res.process` ([#549](https://github.com/ng-alain/delon/issues/549)) ([102f53f](https://github.com/ng-alain/delon/commit/102f53f))
* **abc:st:** fix auto hide dropdown in buttons ([#556](https://github.com/ng-alain/delon/issues/556)) ([5eb00eb](https://github.com/ng-alain/delon/commit/5eb00eb))
* **theme:http:** fix losing generic in `get` ([#551](https://github.com/ng-alain/delon/issues/551)) ([b2e1482](https://github.com/ng-alain/delon/commit/b2e1482))
* **util:deepMergeKey:** fix override array when  ingoreArray is true ([#555](https://github.com/ng-alain/delon/issues/555)) ([6d4c1cc](https://github.com/ng-alain/delon/commit/6d4c1cc))


### Performance Improvements

* use secondary entry modules in ng-zorro ([#548](https://github.com/ng-alain/delon/issues/548)) ([5d8bac1](https://github.com/ng-alain/delon/commit/5d8bac1))



## [7.3.2](https://github.com/ng-alain/delon/compare/7.3.1...7.3.2) (2019-05-04)


### Bug Fixes

* **abc:se:** fix ingore label width when layout is inline ([#553](https://github.com/ng-alain/delon/issues/553)) ([70322fa](https://github.com/ng-alain/delon/commit/70322fa))
* **abc:st:** add `rawData` parameter of `res.process` ([#549](https://github.com/ng-alain/delon/issues/549)) ([102f53f](https://github.com/ng-alain/delon/commit/102f53f))
* **abc:st:** fix auto hide dropdown in buttons ([#556](https://github.com/ng-alain/delon/issues/556)) ([5eb00eb](https://github.com/ng-alain/delon/commit/5eb00eb))
* **theme:http:** fix losing generic in `get` ([#551](https://github.com/ng-alain/delon/issues/551)) ([b2e1482](https://github.com/ng-alain/delon/commit/b2e1482))
* **util:deepMergeKey:** fix override array when  ingoreArray is true ([#555](https://github.com/ng-alain/delon/issues/555)) ([6d4c1cc](https://github.com/ng-alain/delon/commit/6d4c1cc))


### Performance Improvements

* use secondary entry modules in ng-zorro ([#548](https://github.com/ng-alain/delon/issues/548)) ([5d8bac1](https://github.com/ng-alain/delon/commit/5d8bac1))



## [7.3.1](https://github.com/ng-alain/delon/compare/7.3.0...7.3.1) (2019-04-30)


### Bug Fixes

* **abc:sv:** fix detail misalignment when content include block ([#545](https://github.com/ng-alain/delon/issues/545)) ([a3191a3](https://github.com/ng-alain/delon/commit/a3191a3))
* **cli:** fix `lint:style` invalid script ([#541](https://github.com/ng-alain/delon/issues/541)) ([1d41e82](https://github.com/ng-alain/delon/commit/1d41e82))
* **form:*:** fix `ViewDestroyedError` error ([#542](https://github.com/ng-alain/delon/issues/542)) ([5d8ffa4](https://github.com/ng-alain/delon/commit/5d8ffa4))
* **theme:http:** fix losing retrun a generic type in `get` ([#546](https://github.com/ng-alain/delon/issues/546)) ([359159c](https://github.com/ng-alain/delon/commit/359159c))



# [7.3.0](https://github.com/ng-alain/delon/compare/7.2.0...7.3.0) (2019-04-26)


### Bug Fixes

* **abc:st:** fix ingore load data when page size changed ([#539](https://github.com/ng-alain/delon/issues/539)) ([12ad96f](https://github.com/ng-alain/delon/commit/12ad96f))
* **form:*:** fix can't render when async data ([#525](https://github.com/ng-alain/delon/issues/525)) ([d4d4428](https://github.com/ng-alain/delon/commit/d4d4428))
* **form:date:** fix throw error when not include end property ([#527](https://github.com/ng-alain/delon/issues/527)) ([f06757c](https://github.com/ng-alain/delon/commit/f06757c))
* **form:select:** fix i18n of notFoundContent ([#524](https://github.com/ng-alain/delon/issues/524)) ([1df658c](https://github.com/ng-alain/delon/commit/1df658c))
* **form:upload:** fix clean value when remove file list ([#526](https://github.com/ng-alain/delon/issues/526)) ([0f4e1c5](https://github.com/ng-alain/delon/commit/0f4e1c5))
* **theme:drawer:** fix deep merge object ([#535](https://github.com/ng-alain/delon/issues/535)) ([9c588eb](https://github.com/ng-alain/delon/commit/9c588eb))
* **theme:modal:** fix losing `nzWrapClassName` when has `size` exists ([#537](https://github.com/ng-alain/delon/issues/537)) ([c64834a](https://github.com/ng-alain/delon/commit/c64834a))


### Features

* **abc:st:** add `showExpand` property ([#520](https://github.com/ng-alain/delon/issues/520)) ([d87d56f](https://github.com/ng-alain/delon/commit/d87d56f))
* **abc:st:** add `widthMode` property ([#518](https://github.com/ng-alain/delon/issues/518)) ([715d5de](https://github.com/ng-alain/delon/commit/715d5de))
* **abc:st:** support controlled `loading` property ([#533](https://github.com/ng-alain/delon/issues/533)) ([317b88c](https://github.com/ng-alain/delon/commit/317b88c))
* **acl:** add `*aclIf` structural directive ([#529](https://github.com/ng-alain/delon/issues/529)) ([cf49779](https://github.com/ng-alain/delon/commit/cf49779))
* **form:** add icon in button proprety ([#538](https://github.com/ng-alain/delon/issues/538)) ([0ef4281](https://github.com/ng-alain/delon/commit/0ef4281))
* **form:** add loading property ([#517](https://github.com/ng-alain/delon/issues/517)) ([1e9df24](https://github.com/ng-alain/delon/commit/1e9df24))
* **theme:yn:** add mode property ([#534](https://github.com/ng-alain/delon/issues/534)) ([ebd42be](https://github.com/ng-alain/delon/commit/ebd42be))



# [7.2.0](https://github.com/ng-alain/delon/compare/7.1.0...7.2.0) (2019-04-09)


### Bug Fixes

* **abc:_src:** fix invalid size ([#503](https://github.com/ng-alain/delon/issues/503)) ([76fc61b](https://github.com/ng-alain/delon/commit/76fc61b))
* **abc:reuse-tab:** fix actived select tab when close right or other ([#500](https://github.com/ng-alain/delon/issues/500)) ([ed3eef7](https://github.com/ng-alain/delon/commit/ed3eef7))
* **abc:st:** fix missing trigger expand event when click expand icon ([#501](https://github.com/ng-alain/delon/issues/501)) ([a0a9c53](https://github.com/ng-alain/delon/commit/a0a9c53))
* **cli:** fix removed header-i18n when no-include i18n ([#505](https://github.com/ng-alain/delon/issues/505)) ([9839f69](https://github.com/ng-alain/delon/commit/9839f69))
* **sf:** fix layout misplacement in inline mode ([#514](https://github.com/ng-alain/delon/issues/514)) ([9a7901a](https://github.com/ng-alain/delon/commit/9a7901a))
* **sf:radio:** fix async data invlid render ([#504](https://github.com/ng-alain/delon/issues/504)) ([18c6af5](https://github.com/ng-alain/delon/commit/18c6af5))


### Features

* **abc:reuse-tab:** add `tabBarExtraContent` `tabBarStyle` `tabBarGutter` properites ([#510](https://github.com/ng-alain/delon/issues/510)) ([5d48933](https://github.com/ng-alain/delon/commit/5d48933))
* **acl:** add `preCan` property in global config ([#511](https://github.com/ng-alain/delon/issues/511)) ([1bdbd8c](https://github.com/ng-alain/delon/commit/1bdbd8c))



# [7.1.0](https://github.com/ng-alain/delon/compare/7.0.3...7.1.0) (2019-03-30)


### Bug Fixes

* **sf:checkbox:** fix invalid trigger check-all when click input ([#493](https://github.com/ng-alain/delon/issues/493)) ([4ee3ca5](https://github.com/ng-alain/delon/commit/4ee3ca5))
* **sf:select:** fix invalid clear value ([#496](https://github.com/ng-alain/delon/issues/496)) ([28e3915](https://github.com/ng-alain/delon/commit/28e3915))


### Features

* **abc:qr:** add support unicode value ([#495](https://github.com/ng-alain/delon/issues/495)) ([9082319](https://github.com/ng-alain/delon/commit/9082319))
* **abc:sv:** add unit property ([#497](https://github.com/ng-alain/delon/issues/497)) ([5a84e1b](https://github.com/ng-alain/delon/commit/5a84e1b))
* **cli:plugin:sts:** add sts plugin ([#494](https://github.com/ng-alain/delon/issues/494)) ([5f735db](https://github.com/ng-alain/delon/commit/5f735db))
* **module:theme:** adding Korean locale ([#486](https://github.com/ng-alain/delon/issues/486)) ([5e3ad9c](https://github.com/ng-alain/delon/commit/5e3ad9c))



## [7.0.3](https://github.com/ng-alain/delon/compare/7.0.2...7.0.3) (2019-03-20)


### Bug Fixes

* **abc:result:** use nztype instead of class anticon ([#483](https://github.com/ng-alain/delon/issues/483)) ([7553860](https://github.com/ng-alain/delon/commit/7553860))
* **abc:se:** should be keeping placeholder when content is empty ([#480](https://github.com/ng-alain/delon/issues/480)) ([e35c2e0](https://github.com/ng-alain/delon/commit/e35c2e0))
* **abc:st:** fix invalid number type of width ([#481](https://github.com/ng-alain/delon/issues/481)) ([7cdbe6e](https://github.com/ng-alain/delon/commit/7cdbe6e))
* **abc:st:** fix losing global config in modal or drawer ([#482](https://github.com/ng-alain/delon/issues/482)) ([ab34a44](https://github.com/ng-alain/delon/commit/ab34a44))
* **abc:st:** fix styles of filter button ([#474](https://github.com/ng-alain/delon/issues/474)) ([f491b4d](https://github.com/ng-alain/delon/commit/f491b4d))
* **sf:number:** fix show undefined or null when use prefix or unit an… ([#473](https://github.com/ng-alain/delon/issues/473)) ([4d2cede](https://github.com/ng-alain/delon/commit/4d2cede))
* **util:deepGet:** fix losing 0 value ([#479](https://github.com/ng-alain/delon/issues/479)) ([bf37459](https://github.com/ng-alain/delon/commit/bf37459))


### Features

* **abc:st:** add raw data in custom  type of statistical ([#478](https://github.com/ng-alain/delon/issues/478)) ([431c461](https://github.com/ng-alain/delon/commit/431c461))



## [7.0.2](https://github.com/ng-alain/delon/compare/7.0.1...7.0.2) (2019-03-05)


### Bug Fixes

* **abc:sidebar-nav:** fix warnning 'Navigation triggered outside Angu… ([#466](https://github.com/ng-alain/delon/issues/466)) ([b565b3f](https://github.com/ng-alain/delon/commit/b565b3f))
* **abc:st:** fix losing req config ([#467](https://github.com/ng-alain/delon/issues/467)) ([697f33e](https://github.com/ng-alain/delon/commit/697f33e))
* **theme:drawer:** fix body scroll when placement is top or bottom ([#469](https://github.com/ng-alain/delon/issues/469)) ([873d0de](https://github.com/ng-alain/delon/commit/873d0de))


### Features

* **sf:upload:** add urlReName property ([#464](https://github.com/ng-alain/delon/issues/464)) ([5540631](https://github.com/ng-alain/delon/commit/5540631))



## [7.0.1](https://github.com/ng-alain/delon/compare/7.0.0...7.0.1) (2019-03-01)


### Bug Fixes

* **cli:** fix ignores files and folders named "core" by default ([#461](https://github.com/ng-alain/delon/issues/461)) ([bd5696a](https://github.com/ng-alain/delon/commit/bd5696a))



# [7.0.0](https://github.com/ng-alain/delon/compare/7.0.0-rc.10...7.0.0) (2019-02-28)


### Features

* add el_GR locale ([#423](https://github.com/ng-alain/delon/issues/423)) ([17a03d6](https://github.com/ng-alain/delon/commit/17a03d6))



# [7.0.0-rc.10](https://github.com/ng-alain/delon/compare/7.0.0-rc.9...7.0.0-rc.10) (2019-02-22)



# [7.0.0-rc.9](https://github.com/ng-alain/delon/compare/7.0.0-rc.8...7.0.0-rc.9) (2019-02-22)

[deprecated]

### Bug Fixes

* **abc:sidebar:** fix invalid menu item ellipsis when text overflow ([#447](https://github.com/ng-alain/delon/issues/447)) ([5d3c7ea](https://github.com/ng-alain/delon/commit/5d3c7ea))
* **module:sf:autocomplete:** fix invalid custom email suffix by enum ([#439](https://github.com/ng-alain/delon/issues/439)) ([f072fe0](https://github.com/ng-alain/delon/commit/f072fe0)), closes [#438](https://github.com/ng-alain/delon/issues/438)
* **module:st:** fix sort order data should be in user click order ([#445](https://github.com/ng-alain/delon/issues/445)) ([0dc95c2](https://github.com/ng-alain/delon/commit/0dc95c2))


### Features

* **abc:se:** add labelWidth property ([#451](https://github.com/ng-alain/delon/issues/451)) ([94ebfbe](https://github.com/ng-alain/delon/commit/94ebfbe))
* **abc:sidebar-nav:** add  openStrictly property ([#452](https://github.com/ng-alain/delon/issues/452)) ([ffeccdd](https://github.com/ng-alain/delon/commit/ffeccdd))
* **abc:st:** support custom function of noIndex ([#453](https://github.com/ng-alain/delon/issues/453)) ([87bad16](https://github.com/ng-alain/delon/commit/87bad16))
* **module:range-picker:** add shortcut property ([#441](https://github.com/ng-alain/delon/issues/441)) ([6598271](https://github.com/ng-alain/delon/commit/6598271))
* **schematics:** add VsCode extension recommendations in ng add ([#443](https://github.com/ng-alain/delon/issues/443)) ([7df5ed2](https://github.com/ng-alain/delon/commit/7df5ed2))


### Performance Improvements

* **abc:sidebar:** optimize dom rendering ([#448](https://github.com/ng-alain/delon/issues/448)) ([e35118a](https://github.com/ng-alain/delon/commit/e35118a))



# [7.0.0-rc.8](https://github.com/ng-alain/delon/compare/7.0.0-rc.7...7.0.0-rc.8) (2019-02-15)


### Bug Fixes

* **module:se:** fix error status in first visual ([#434](https://github.com/ng-alain/delon/issues/434)) ([f0f6622](https://github.com/ng-alain/delon/commit/f0f6622))
* **module:sf:** fix invalid request in $ref property ([#431](https://github.com/ng-alain/delon/issues/431)) ([2f83a4b](https://github.com/ng-alain/delon/commit/2f83a4b)), closes [#428](https://github.com/ng-alain/delon/issues/428)
* **module:sf:checkbox:** fix invalid indeterminate status ([#433](https://github.com/ng-alain/delon/issues/433)) ([2b07901](https://github.com/ng-alain/delon/commit/2b07901))
* **module:sf:object:** fix default hide all title in object widget ([#429](https://github.com/ng-alain/delon/issues/429)) ([9c51e26](https://github.com/ng-alain/delon/commit/9c51e26)), closes [#430](https://github.com/ng-alain/delon/issues/430)
* **module:theme:** fix button + button spacing of transfer options when enabled preserveWhitespaces ([#435](https://github.com/ng-alain/delon/issues/435)) ([3a6d900](https://github.com/ng-alain/delon/commit/3a6d900))



# [7.0.0-rc.7](https://github.com/ng-alain/delon/compare/7.0.0-rc.6...7.0.0-rc.7) (2019-02-14)


### Bug Fixes

* **module:edit:** fix should contain dirty check ([#421](https://github.com/ng-alain/delon/issues/421)) ([908bd8d](https://github.com/ng-alain/delon/commit/908bd8d))
* **module:sf:autocomplete:** fix losing defualt value ([#417](https://github.com/ng-alain/delon/issues/417)) ([126e99d](https://github.com/ng-alain/delon/commit/126e99d)), closes [#387](https://github.com/ng-alain/delon/issues/387)
* **module:sf:date:** fix ui config error of end property when in a nested object ([#405](https://github.com/ng-alain/delon/issues/405)) ([#407](https://github.com/ng-alain/delon/issues/407)) ([033713a](https://github.com/ng-alain/delon/commit/033713a))


### Features

* **module:sf:** add onlyVisual property in sf component ([#411](https://github.com/ng-alain/delon/issues/411)) ([f3a5e1a](https://github.com/ng-alain/delon/commit/f3a5e1a))
* **module:sf:object:** support view title text ([#425](https://github.com/ng-alain/delon/issues/425)) ([087c979](https://github.com/ng-alain/delon/commit/087c979))
* **module:st:** add process in STReq ([#422](https://github.com/ng-alain/delon/issues/422)) ([62a5749](https://github.com/ng-alain/delon/commit/62a5749)), closes [#419](https://github.com/ng-alain/delon/issues/419)
* **module:st:** add skip & limit pagination type ([#404](https://github.com/ng-alain/delon/issues/404)) ([9c6be6c](https://github.com/ng-alain/delon/commit/9c6be6c))
* **module:st:** add statistical ([#413](https://github.com/ng-alain/delon/issues/413)) ([80c55d0](https://github.com/ng-alain/delon/commit/80c55d0))
* **schematics:** add external fix function in tpl command ([#410](https://github.com/ng-alain/delon/issues/410)) ([88def47](https://github.com/ng-alain/delon/commit/88def47)), closes [#409](https://github.com/ng-alain/delon/issues/409)



# [7.0.0-rc.6](https://github.com/ng-alain/delon/compare/7.0.0-rc.5...7.0.0-rc.6) (2019-01-22)


### Bug Fixes

* **module:schematics:** fix missing version of ng-alain-codelyzer ([#401](https://github.com/ng-alain/delon/issues/401)) ([e217940](https://github.com/ng-alain/delon/commit/e217940))



# [7.0.0-rc.5](https://github.com/ng-alain/delon/compare/7.0.0-rc.4...7.0.0-rc.5) (2019-01-22)


### Bug Fixes

* **module:mock:** fix `/:id` does not match `user/1` ([#384](https://github.com/ng-alain/delon/issues/384)) ([246934b](https://github.com/ng-alain/delon/commit/246934b))
* **module:sf:number:** fix missing integer type ([#385](https://github.com/ng-alain/delon/issues/385)) ([1f0226c](https://github.com/ng-alain/delon/commit/1f0226c)), closes [#381](https://github.com/ng-alain/delon/issues/381)
* **module:theme:title:** fix i18n will auto call setTitle ([#397](https://github.com/ng-alain/delon/issues/397)) ([4411a19](https://github.com/ng-alain/delon/commit/4411a19))


### Features

* **module:sf:radio:** add change event ([#383](https://github.com/ng-alain/delon/issues/383)) ([7ebb484](https://github.com/ng-alain/delon/commit/7ebb484))
* **module:sf:upload:** add extra properties ([#395](https://github.com/ng-alain/delon/issues/395)) ([29c66b5](https://github.com/ng-alain/delon/commit/29c66b5)), closes [#389](https://github.com/ng-alain/delon/issues/389)
* **module:sf:upload:** add fileList property ([#386](https://github.com/ng-alain/delon/issues/386)) ([06adf96](https://github.com/ng-alain/delon/commit/06adf96))
* **module:st:** add `iif` in column ([#396](https://github.com/ng-alain/delon/issues/396)) ([066030d](https://github.com/ng-alain/delon/commit/066030d)), closes [#393](https://github.com/ng-alain/delon/issues/393)
* **module:st:** add expand event in change property ([#394](https://github.com/ng-alain/delon/issues/394)) ([84ff628](https://github.com/ng-alain/delon/commit/84ff628))
* **module:st:** route state includes pi, ps, total data ([#391](https://github.com/ng-alain/delon/issues/391)) ([567eadd](https://github.com/ng-alain/delon/commit/567eadd))
* **module:theme:** add text, icon, width more sizes ([#392](https://github.com/ng-alain/delon/issues/392)) ([5bd9d7e](https://github.com/ng-alain/delon/commit/5bd9d7e))


### Performance Improvements

* **module:chart:** optimize g2 performance ([#388](https://github.com/ng-alain/delon/issues/388)) ([94ef1fe](https://github.com/ng-alain/delon/commit/94ef1fe)), closes [#377](https://github.com/ng-alain/delon/issues/377)



# [7.0.0-rc.4](https://github.com/ng-alain/delon/compare/7.0.0-rc.3...7.0.0-rc.4) (2019-01-12)


### Bug Fixes

* **module:*:** fix losing global config ([#378](https://github.com/ng-alain/delon/issues/378)) ([b58334f](https://github.com/ng-alain/delon/commit/b58334f))
* **module:reuse-tab:** fix overflow when route changed ([#369](https://github.com/ng-alain/delon/issues/369)) ([83d7831](https://github.com/ng-alain/delon/commit/83d7831)), closes [#361](https://github.com/ng-alain/delon/issues/361)
* **module:se:** fix error message style ([#371](https://github.com/ng-alain/delon/issues/371)) ([c5431f8](https://github.com/ng-alain/delon/commit/c5431f8)), closes [#370](https://github.com/ng-alain/delon/issues/370)
* **module:sf:autocomplete:**  fix invalid value when item is SFSchemaEnum ([#362](https://github.com/ng-alain/delon/issues/362)) ([9cd179e](https://github.com/ng-alain/delon/commit/9cd179e))
* **module:st:** fix disabled check all when  all data is disabled ([#367](https://github.com/ng-alain/delon/issues/367)) ([20b654e](https://github.com/ng-alain/delon/commit/20b654e)), closes [#363](https://github.com/ng-alain/delon/issues/363)


### Features

* **module:reuse-tab:** support custom context menu ([#368](https://github.com/ng-alain/delon/issues/368)) ([2c0eb89](https://github.com/ng-alain/delon/commit/2c0eb89)), closes [#364](https://github.com/ng-alain/delon/issues/364)
* **module:sidebar-nav:** add recursivePath property ([#374](https://github.com/ng-alain/delon/issues/374)) ([e24ee4f](https://github.com/ng-alain/delon/commit/e24ee4f)), closes [#373](https://github.com/ng-alain/delon/issues/373) [#365](https://github.com/ng-alain/delon/issues/365)



# [7.0.0-rc.3](https://github.com/ng-alain/delon/compare/7.0.0-rc.2...7.0.0-rc.3) (2018-12-29)


### Bug Fixes

* **module:theme:** fix not found window value ([#355](https://github.com/ng-alain/delon/issues/355)) ([3be639a](https://github.com/ng-alain/delon/commit/3be639a))



# [7.0.0-rc.2](https://github.com/ng-alain/delon/compare/7.0.0-rc.1...7.0.0-rc.2) (2018-12-28)


### Bug Fixes

* **module:cache:** fix specified storage type parameters ([#343](https://github.com/ng-alain/delon/issues/343)) ([fd005e5](https://github.com/ng-alain/delon/commit/fd005e5))
* **module:reuse-tab:** fix skip not closable in store ([#344](https://github.com/ng-alain/delon/issues/344)) ([fa08c07](https://github.com/ng-alain/delon/commit/fa08c07))
* **module:se:** fix ingore error visual when is disabled ([#339](https://github.com/ng-alain/delon/issues/339)) ([7223e85](https://github.com/ng-alain/delon/commit/7223e85))
* **module:sf:** fix invalid trigger submit via add button ([#349](https://github.com/ng-alain/delon/issues/349)) ([8e11729](https://github.com/ng-alain/delon/commit/8e11729)), closes [#348](https://github.com/ng-alain/delon/issues/348)
* **module:sf:** should based on item unsubscription ([#345](https://github.com/ng-alain/delon/issues/345)) ([2520f11](https://github.com/ng-alain/delon/commit/2520f11))


### Features

* **module:reuse-tab:** add keeping scroll property ([#347](https://github.com/ng-alain/delon/issues/347)) ([862d8f4](https://github.com/ng-alain/delon/commit/862d8f4))



# [7.0.0-rc.1](https://github.com/ng-alain/delon/compare/7.0.0-rc.0...7.0.0-rc.1) (2018-12-24)


### Bug Fixes

* **module:auth:** fix unrecognized full URL anonymous key ([#328](https://github.com/ng-alain/delon/issues/328)) ([e223ccb](https://github.com/ng-alain/delon/commit/e223ccb))
* **module:chart:timeline:** remove tickCount ([#323](https://github.com/ng-alain/delon/issues/323)) ([20920fc](https://github.com/ng-alain/delon/commit/20920fc))
* **module:sf:** shoule trigger detect change when reset value ([#332](https://github.com/ng-alain/delon/issues/332)) ([ffd365b](https://github.com/ng-alain/delon/commit/ffd365b))
* **module:sf:cascader:** fix invalid search when labelProperty or valueProperty is empty ([#325](https://github.com/ng-alain/delon/issues/325)) ([4d4e53f](https://github.com/ng-alain/delon/commit/4d4e53f))
* **module:st:** should recalculate no value when call removeRow method ([#331](https://github.com/ng-alain/delon/issues/331)) ([6c8c2d1](https://github.com/ng-alain/delon/commit/6c8c2d1)), closes [#330](https://github.com/ng-alain/delon/issues/330)
* **module:theme:** fix keeping show scroll bar in firefox ([#336](https://github.com/ng-alain/delon/issues/336)) ([727d0d7](https://github.com/ng-alain/delon/commit/727d0d7))


### Features

* **module:auth:** add referrer property ([#334](https://github.com/ng-alain/delon/issues/334)) ([0510864](https://github.com/ng-alain/delon/commit/0510864))
* **module:mock:** add executeOtherInterceptors config ([#321](https://github.com/ng-alain/delon/issues/321)) ([d77e8e9](https://github.com/ng-alain/delon/commit/d77e8e9))
* **module:sidebar-nav:** add disabledAcl property ([#337](https://github.com/ng-alain/delon/issues/337)) ([ebbeed3](https://github.com/ng-alain/delon/commit/ebbeed3))
* **module:st:** add expandRowByClick property ([#326](https://github.com/ng-alain/delon/issues/326)) ([a8a6695](https://github.com/ng-alain/delon/commit/a8a6695))
* **module:st:** support response body is an array type ([#327](https://github.com/ng-alain/delon/issues/327)) ([4e681dc](https://github.com/ng-alain/delon/commit/4e681dc))
* **module:testing:** add [@delon](https://github.com/delon)/testing lib ([#329](https://github.com/ng-alain/delon/issues/329)) ([9d533cf](https://github.com/ng-alain/delon/commit/9d533cf))
* **module:theme:** adding Polish locale ([#308](https://github.com/ng-alain/delon/issues/308)) ([025282c](https://github.com/ng-alain/delon/commit/025282c))
* **module:util:** export stringTemplateOutlet ([#324](https://github.com/ng-alain/delon/issues/324)) ([e8d9ed1](https://github.com/ng-alain/delon/commit/e8d9ed1))



# [7.0.0-rc.0](https://github.com/ng-alain/delon/compare/2.0.1...7.0.0-rc.0) (2018-12-14)


### Bug Fixes

* **module:notice-icon:** fix missing class ([#317](https://github.com/ng-alain/delon/issues/317)) ([8cb86b5](https://github.com/ng-alain/delon/commit/8cb86b5))
* **module:st:** should clean filter style when not filter ([#303](https://github.com/ng-alain/delon/issues/303)) ([96430d1](https://github.com/ng-alain/delon/commit/96430d1))
* **schematics:** fix template in list command ([#302](https://github.com/ng-alain/delon/issues/302)) ([839147e](https://github.com/ng-alain/delon/commit/839147e))


### Features

* **module:theme:title:** add setTitleByI18n method ([#299](https://github.com/ng-alain/delon/issues/299)) ([80a9636](https://github.com/ng-alain/delon/commit/80a9636))



## [2.0.1](https://github.com/ng-alain/delon/compare/2.0.0...2.0.1) (2018-11-25)


### Bug Fixes

* **module:page-header:** should be clean old breadcrumb data when changes ([#296](https://github.com/ng-alain/delon/issues/296)) ([862aa9d](https://github.com/ng-alain/delon/commit/862aa9d)), closes [#293](https://github.com/ng-alain/delon/issues/293)
* **module:sf:autocomplete:** fix missing value ([#291](https://github.com/ng-alain/delon/issues/291)) ([ac17fb3](https://github.com/ng-alain/delon/commit/ac17fb3)), closes [#290](https://github.com/ng-alain/delon/issues/290)
* **module:sf:button:** fix invalid button size ([#294](https://github.com/ng-alain/delon/issues/294)) ([96f8adc](https://github.com/ng-alain/delon/commit/96f8adc))
* **module:theme:style:** fix dropdown + button spacing when closed preserve ([#292](https://github.com/ng-alain/delon/issues/292)) ([d330e5e](https://github.com/ng-alain/delon/commit/d330e5e))
* **module:theme:title:** fix default property should  be not read-only ([#295](https://github.com/ng-alain/delon/issues/295)) ([a882507](https://github.com/ng-alain/delon/commit/a882507))


### Features

* **module:theme:** add tr-TR locale ([#289](https://github.com/ng-alain/delon/issues/289)) ([9df6f0e](https://github.com/ng-alain/delon/commit/9df6f0e)), closes [#288](https://github.com/ng-alain/delon/issues/288)



# [2.0.0](https://github.com/ng-alain/delon/compare/1.5.2...2.0.0) (2018-11-20)


### Scaffold

* **all:** `OnPush` mode priority ([#772](https://github.com/ng-alain/ng-alain/pull/772))
* **router:** add SimpleGuard of root router ([#774](https://github.com/ng-alain/ng-alain/pull/774))
* **i18n:** add passport pages ([#777](https://github.com/ng-alain/ng-alain/pull/777))

### Bug Fixes

* **module:mock:** fix loading status of _HttClient ([#270](https://github.com/ng-alain/delon/pull/270))
* **module:sf:upload:** fix missing size property of upload widget ([#274](https://github.com/ng-alain/delon/pull/274))
* **module:sf:checkbox:** fix delayed rendering when onpush strategy ([#278](https://github.com/ng-alain/delon/pull/278))
* **module:st:** fix render null when is value is null in edge or ie ([#275](https://github.com/ng-alain/delon/pull/275))
* **module:page-header:** should be refresh breadcrumb when router changed ([#276](https://github.com/ng-alain/delon/pull/276))

### Features

* **schematics:** Support for dynamic build ng-alain of specified language versions ([#286](https://github.com/ng-alain/delon/issues/286)) ([f0bff6d](https://github.com/ng-alain/delon/commit/f0bff6d))
* **module:st:** add clear & clearStatus methods ([#282](https://github.com/ng-alain/delon/pull/282))
* **module:st:** add single sort config [#775](https://github.com/ng-alain/ng-alain/issues/775) ([#283](https://github.com/ng-alain/delon/pull/283))
* **module:http:** support decorator `@GET`, `@POST` etc, [Document](https://ng-alain.com/theme/http/en#Decorators) ([#284](https://github.com/ng-alain/delon/pull/284))
* **schematics:** Support for dynamic build ng-alain of specified language versions ([#286](https://github.com/ng-alain/delon/pull/286))

### BREAKING CHANGES

* **module:st:** remove deprecated events: `checkboxChange`, `radioChange`, `sortChange` etc ([#281](https://github.com/ng-alain/delon/pull/281))


# [2.0.0-rc.3](https://github.com/ng-alain/delon/compare/2.0.0-rc.2...2.0.0-rc.3) (2018-11-09)


### Bug Fixes

* **module:sf:** fix missing title ([#259](https://github.com/ng-alain/delon/issues/259)) ([b78f38a](https://github.com/ng-alain/delon/commit/b78f38a)), closes [#258](https://github.com/ng-alain/delon/issues/258)
* **module:sf:tree-select:** fix children repeat data when expand changes ([#260](https://github.com/ng-alain/delon/issues/260)) ([2bfd75f](https://github.com/ng-alain/delon/commit/2bfd75f))
* **module:st:** fix invalid trigger when used icon & pop ([#256](https://github.com/ng-alain/delon/issues/256)) ([598f9ab](https://github.com/ng-alain/delon/commit/598f9ab))
* GLOBAL_THIRD_MDOULES changed to GLOBAL_THIRD_MODULES ([#262](https://github.com/ng-alain/delon/issues/262)) ([d001642](https://github.com/ng-alain/delon/commit/d001642))
* **module:theme:menu:** fix shortcut children polluted ([#265](https://github.com/ng-alain/delon/issues/265)) ([a255fe0](https://github.com/ng-alain/delon/commit/a255fe0))


### Features

* **module:sidebar-nav:** add icon more properties ([#263](https://github.com/ng-alain/delon/issues/263)) ([5b696f5](https://github.com/ng-alain/delon/commit/5b696f5))
* **module:st:** add no type ([#261](https://github.com/ng-alain/delon/issues/261)) ([8fc29ce](https://github.com/ng-alain/delon/commit/8fc29ce))
* **module:st:** add remove method ([#255](https://github.com/ng-alain/delon/issues/255)) ([13a3a21](https://github.com/ng-alain/delon/commit/13a3a21))
* **module:st:** add rowClassName property ([#268](https://github.com/ng-alain/delon/issues/268)) ([0af1484](https://github.com/ng-alain/delon/commit/0af1484))
* **module:theme:** add scrollbar style service of div ([#267](https://github.com/ng-alain/delon/issues/267)) ([161d328](https://github.com/ng-alain/delon/commit/161d328))
* **module:theme:** add url pipe ([#254](https://github.com/ng-alain/delon/issues/254)) ([62724a0](https://github.com/ng-alain/delon/commit/62724a0))
* **schematics:** add color less when running ng commend ([#253](https://github.com/ng-alain/delon/issues/253)) ([145e4a9](https://github.com/ng-alain/delon/commit/145e4a9))



<a name="2.0.0-rc.2"></a>
# [2.0.0-rc.2](https://github.com/ng-alain/delon/compare/2.0.0-rc.1...2.0.0-rc.2) (2018-11-01)


### Bug Fixes

* **module:*:** safe html ([#239](https://github.com/ng-alain/delon/issues/239)) ([0298665](https://github.com/ng-alain/delon/commit/0298665))
* **module:form:** fix attempt to use a destroyed error ([#248](https://github.com/ng-alain/delon/issues/248)) ([3e470e7](https://github.com/ng-alain/delon/commit/3e470e7))
* **module:sf:** fix button spanLabelFixed is zero value ([#242](https://github.com/ng-alain/delon/issues/242)) ([1f601e2](https://github.com/ng-alain/delon/commit/1f601e2))
* **module:theme:** fix grey color values ([#249](https://github.com/ng-alain/delon/issues/249)) ([6234538](https://github.com/ng-alain/delon/commit/6234538))
* **module:theme:** fix ng-invalid style ([#243](https://github.com/ng-alain/delon/issues/243)) ([fe6d104](https://github.com/ng-alain/delon/commit/fe6d104))
* **schematics:** fix repeat alias name ([#247](https://github.com/ng-alain/delon/issues/247)) ([4f744fa](https://github.com/ng-alain/delon/commit/4f744fa))


### Features

* **module:mock:** support array params of queryString ([#246](https://github.com/ng-alain/delon/issues/246)) ([f0135ce](https://github.com/ng-alain/delon/commit/f0135ce))
* **module:st:** add icon of button ([#240](https://github.com/ng-alain/delon/issues/240)) ([1145d47](https://github.com/ng-alain/delon/commit/1145d47))
* **module:theme:** add recursive upward find in menu service ([#244](https://github.com/ng-alain/delon/issues/244)) ([c391d3a](https://github.com/ng-alain/delon/commit/c391d3a))
* **module:theme:i18n:** add i18n pipe ([#238](https://github.com/ng-alain/delon/issues/238)) ([423c9c3](https://github.com/ng-alain/delon/commit/423c9c3))



<a name="2.0.0-rc.1"></a>
# [2.0.0-rc.1](https://github.com/ng-alain/delon/compare/2.0.0-beta.5...2.0.0-rc.1) (2018-10-25)


### Bug Fixes

* **form:** fix repeated trigger change detection ([#224](https://github.com/ng-alain/delon/issues/224)) ([a9f2db6](https://github.com/ng-alain/delon/commit/a9f2db6))
* **form:checkbox:** fix misplaced layout of checkbox widget ([#226](https://github.com/ng-alain/delon/issues/226)) ([d75600e](https://github.com/ng-alain/delon/commit/d75600e))
* **form:date:** fix missing nzShowTime in date widgets ([#223](https://github.com/ng-alain/delon/issues/223)) ([a40bc13](https://github.com/ng-alain/delon/commit/a40bc13))
* **st:** fix filter table header in ant design 3.10 ([#229](https://github.com/ng-alain/delon/issues/229)) ([0d70d26](https://github.com/ng-alain/delon/commit/0d70d26))
* **schematics:** fix duplcated alias `t` in tpl command ([#231](https://github.com/ng-alain/delon/issues/231)) ([829f11e](https://github.com/ng-alain/delon/commit/829f11e))
* **schematics:** fix invalid msgSrv property in edit page ([#225](https://github.com/ng-alain/delon/issues/225)) ([e3270e4](https://github.com/ng-alain/delon/commit/e3270e4))
* **schematics:** fix used translate when not i18n ([#230](https://github.com/ng-alain/delon/issues/230)) ([93163a9](https://github.com/ng-alain/delon/commit/93163a9))

### Features

* **schematics:** support 1.x to 2.0 via `ng update` [Document](https://ng-alain.com/docs/upgrade-v2#ng-update)
* **schematics:plugin:** add `icon` plugin [Document](https://ng-alain.com/cli/plugin#icon)
* sync ng-zorro-antd 1.7.1 ([#228](https://github.com/ng-alain/delon/issues/228)) ([9a62ea3](https://github.com/ng-alain/delon/commit/9a62ea3))

### BREAKING CHANGES

* **module:theme:** used `NzDropdownService` instead of `ContextMenuService` ([#234](https://github.com/ng-alain/delon/pull/234))


<a name="2.0.0-beta.5"></a>
# [2.0.0-beta.5](https://github.com/ng-alain/delon/compare/2.0.0-beta.4...2.0.0-beta.5) (2018-10-15)


### Bug Fixes

* **module:code-style:** upgrade husky ([#208](https://github.com/ng-alain/delon/issues/208)) ([61c6214](https://github.com/ng-alain/delon/commit/61c6214))
* **module:form:** fix invalid disabled status when is readOnly ([#212](https://github.com/ng-alain/delon/issues/212)) ([6a68def](https://github.com/ng-alain/delon/commit/6a68def))


### Features

* **module:abc.st:** add total i18n ([#203](https://github.com/ng-alain/delon/issues/203)) ([ec0b0df](https://github.com/ng-alain/delon/commit/ec0b0df))
* **module:theme:** add page loading styles ([#207](https://github.com/ng-alain/delon/issues/207)) ([ad43622](https://github.com/ng-alain/delon/commit/ad43622))
* **module:theme:alain-default:** refactor layout component ([#201](https://github.com/ng-alain/delon/issues/201)) ([8231e65](https://github.com/ng-alain/delon/commit/8231e65))


### BREAKING CHANGES

* **module:theme:alain-default:** + `layout-fixed` was changed to `alain-default__fixed`
+ `layout-boxed` was changed to `alain-default__boxed`
+ `aside-collapsed` was changed to `alain-default__collapsed`



<a name="2.0.0-beta.4"></a>
# [2.0.0-beta.4](https://github.com/ng-alain/delon/compare/1.4.5...2.0.0-beta.4) (2018-10-07)


### Bug Fixes

* **form:date:** fix invalid default value in flat mode ([#187](https://github.com/ng-alain/delon/issues/187)) ([d2c89ca](https://github.com/ng-alain/delon/commit/d2c89ca))
* **theme:styles** fix duplicate white spaces ([#193](https://github.com/ng-alain/delon/issues/193)) ([1545178](https://github.com/ng-alain/delon/commit/1545178))
* **theme:drawer** should be import in forChild ([1545178](https://github.com/ng-alain/delon/commit/09516ea))


### Features

* **abc:page-header:** add loading & wide properies ([#194](https://github.com/ng-alain/delon/issues/194)) ([299e877](https://github.com/ng-alain/delon/commit/299e877))
* **form:number:** add prefix & unit properties ([#189](https://github.com/ng-alain/delon/issues/189)) ([4121b90](https://github.com/ng-alain/delon/commit/4121b90))
* **schematice:** add generate color less ([#196](https://github.com/ng-alain/delon/issues/196)) ([d7f7da6](https://github.com/ng-alain/delon/commit/d7f7da6))
* **theme:context-menu:** add context menu service ([#191](https://github.com/ng-alain/delon/issues/191)) ([f0e96f6](https://github.com/ng-alain/delon/commit/f0e96f6))

### BREAKING CHANGES

* **abc:** use input instead of ContentChild ([cfd0497](https://github.com/ng-alain/delon/commit/cfd0497))


