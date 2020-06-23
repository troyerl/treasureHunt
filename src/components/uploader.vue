<template>
  <div>
    <h3 class="text-center mt-5">Goshen Treasure Hunt Video Upload</h3>
    <div class="mx-3">
      <b-form-file v-model="videoFile" class="mt-3" plain></b-form-file>
      <div class="mt-3">Selected file: {{ videoFile ? videoFile.name : '' }}</div>
      <b-button class="mt-3 w-100" variant="outline-secondary" @click="onSubmit">Upload Video</b-button>
      <b-progress class="mt-4" v-if="value && value !== 100" :value="value" :max="max" show-progress animated></b-progress>
      <b-alert class="mt-4 w-100 text-center" v-if="value === 100" variant="success" show>Video Successfully Uploaded!</b-alert>
    </div>
  </div>
</template>

<script>
const fb = require('../firebaseConfig.js')

export default {
  data() {
    return {
      videoFile: null,
      max: 100,
      value: 0,
    }
  },
  methods: {
    onSubmit() {
      let uploadTask = fb.storageRef.child(this.videoFile.name).put(this.videoFile);
      const self = this;

      uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        self.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      }, function(error) {
        // Handle unsuccessful uploads
        console.log(error);
      }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function() {
          self.videoFile = null;
          self.clearData();
        });
      });
    },
    clearData() {
      const self = this;
      setTimeout(function(){ 
        self.value = 0; 
      }, 5000);
    }
  }
}
</script>

<style>

</style>