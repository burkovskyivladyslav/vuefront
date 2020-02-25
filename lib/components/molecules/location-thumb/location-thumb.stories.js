import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vfMLocationThumb from './location-thumb.vue';
storiesOf('molecule|Location Thumb', module).addDecorator(function () {
  return {
    template: "<div style=\"width:300px\"><story/></div>"
  };
}).add('default', function () {
  return {
    components: {
      vfMLocationThumb: vfMLocationThumb
    },
    template: "<vf-m-location-thumb :location=\"location\" />",
    data: function data() {
      return {
        location: {
          address: '12 street 45 west',
          telephone: '123.232.3422',
          image: "https://opencart.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-1200x750.jpg",
          imageLazy: "https://opencart.vuefront.com/image/cache/catalog/d_blog_module/post/Photo_blog_6-10x7.jpg",
          comment: 'Working hours: 8:00 - 22:00'
        }
      };
    }
  };
}, {
  info: {}
});