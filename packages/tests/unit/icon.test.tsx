import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Icon from '../../components/icon/src/icon.vue';

describe('Icon.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Icon />);
    expect(wrapper.text()).toContain('');
  });
});
