import VfOCompareActions from "./compare-actions.vue.mjs";
import faker from "faker"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "organism/compare-actions",
  component: VfOCompareActions,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfOCompareActions
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-o-compare-actions v-bind="args"/>'
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  product: {
    id: 1,
    image: "https://via.placeholder.com/300",
    imageLazy: "https://via.placeholder.com/10x7",
    name: faker.random.words(2),
    shortDescription: faker.lorem.paragraphs(1),
    rating: faker.datatype.number(5),
    model: faker.random.word(),
    price: faker.commerce.price() + "$",
    special: faker.commerce.price() + "$",
    description: faker.lorem.paragraphs(4)
  }
};
//# sourceMappingURL=compare-actions.stories.mjs.map