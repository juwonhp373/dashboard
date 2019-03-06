import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      drawer: true,
      right: null,
      dropdown_edit: [
        {
          text: 'Mike, John responded to your email',
        },
        { text: 'You have 5 new tasks' },
        { text: 'You are now a friend with Andrew' },
        { text: 'Another Notification' },
        { text: 'Another One' },
      ],
      drawerItems: [
        { title: 'Dashboard', icon: 'dashboard' },
        { title: 'User Profile', icon: 'person' },
        { title: 'Table List', icon: 'assignment' },
        { title: 'Typography', icon: 'font_download' },
        { title: 'Icons', icon: 'bubble_chart' },
        { title: 'Maps', icon: 'place' },
        { title: 'Notifications', icon: 'notification_important' },
      ],
      items: [
        'Mike, John responded to your email',
        'You have 5 new tasks',
        'You are now a friend with Andrew',
        'Another Notification',
        'Another One',
      ],
      value: ['foo', 'bar', 'fizz', 'buzz'],
    };
  },
};
