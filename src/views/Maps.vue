<template>
  <div>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          id="gmap_canvas"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12032.331402653164!2d28.9455079!3d41.0671816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f665fc172ad4624!2sBilgi+University!5e0!3m2!1sen!2str!4v1554623961758!5m2!1sen!2str"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        />
      </div>
    </div>
  </div>
</template>

<style>
  .mapouter {
    text-align: right;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 100%;
    width: 100%;
  }
</style>
