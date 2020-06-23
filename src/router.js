import Vue from 'vue';
import Router from 'vue-router';

import VideoPlayer from './components/videoPlayer';
import Uploader from './components/uploader';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
      {
          path: '*',
          redirect: '/'
      },
      {
        path: '/',
        component: Uploader
      },
      {
          path: '/live',
          component: VideoPlayer,
      }
  ]
});

export default router;