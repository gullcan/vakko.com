import { defineComponent } from '@vue/runtime-dom';

interface MyComponentProps {
 totalItems: number;
 footerItems: string;
}

const MyComponent = defineComponent({
 props: {
    totalItems: {
      type: Number,
      required: true,
    },
    footerItems: {
      type: String,
      required: true,
    },
 },
 // component implementation
});
   console.log(MyComponent.props.totalItems);
   console.log(MyComponent.props.footerItems);

export default MyComponent;