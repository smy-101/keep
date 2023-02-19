import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from './Welcome.module.scss'
import logo from '../assets/vue.svg'

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} alt=""/>
          <h1>Vue记账</h1>
        </header>
        <main class={s.main}>
          <RouterView />
        </main>
      </div>
    );
  },
});
