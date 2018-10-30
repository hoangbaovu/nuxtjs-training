<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content">Content
    </AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.previewText">Preview Text
    </AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      btn-style="cancel"
      style="margin-left: 10px"
      type="button"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'

export default {
  components: {
    AppButton,
    AppControlInput
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
          author: '',
          title: '',
          thumbnail: '',
          content: '',
          previewText: ''
        }
    }
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      // Navigation back
      this.$router.push('/admin');
    }
  }
}
</script>
