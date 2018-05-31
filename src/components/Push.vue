<template>
  <div class="push">
    <button  @click="displayNotification">{{msg}}</button>
  </div>
</template>

<script>
export default {
  name: 'Push',
  data () {
    return {
      msg: 'Push'
    }
  },
  methods: {
    displayNotification () {
      Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
      });
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration()
          .then(function (reg) {
            if(reg == undefined){
              console.log("only works online")
              return
            }
            var options = {
              body: 'First notification!',
              icon: './static/img/notification-flat.png',
              vibrate: [100, 50, 100],
              data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
              },
              actions: [
                {
                  action: 'explore',
                  title: 'Go to the site',
                  icon: './static/img/checkmark.png'
                },
                {
                  action: 'close',
                  title: 'Close the notification',
                  icon: './static/img/xmark.png'
                }
              ]
            }
            reg.showNotification('Your Message Here!', options)
          }
        )
      }
    }
  }

}
</script>

<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
