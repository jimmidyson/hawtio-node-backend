/// <reference path="init.ts"/>

module HawtioBackend {

  export function mountAsset(mount:string, dir:string) {
    app.get(mount, express.static(__dirname + dir));
  }

  addStartupTask(() => {
    config.staticAssets.forEach((asset) => {
      log.info("Mounting static asset: ", asset);
      mountAsset('/', asset);
    });
  });

}