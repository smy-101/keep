import { defineComponent } from "vue";
import s from './First.module.scss'
import logo from '../../assets/vue.svg'
import {RouterLink} from 'vue-router';

export const First = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.logo} src={logo} alt=""/>
          <h2>会挣钱<br/>还要会省钱</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
          <RouterLink to='/welcome/2'>下一页</RouterLink>
          <RouterLink to='/start'>跳过</RouterLink>
        </div>
      </div>
    );
  },
});