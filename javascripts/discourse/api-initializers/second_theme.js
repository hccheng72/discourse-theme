import { apiInitializer } from 'discourse/lib/api';
import { ajax } from 'discourse/lib/ajax';

export default apiInitializer('0.11.1', api => {
  //console.log("hello world from api initializer!");
  api.registerConnectorClass('below-site-header', 'display-badges', {
    setupComponent(args, component) {
      ajax('/badges.json').then((badgeData) => {
        let badges = badgeData.badges;
        component.set('badges', badges);
      });
    }
  });

  // api.replaceIcon('heart', 'thumb-up');
});
