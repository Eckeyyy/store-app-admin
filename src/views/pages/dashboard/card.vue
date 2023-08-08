<template>
  <div class="card-container">
    <div style="background-color: #ececec; padding: 20px;">
      <a-row :gutter="30">
        <a-col
          v-for="(item, i) in data"
          :key="i"
          :span="span"
        >
          <a-card
            :title="item"
            :bordered="false"
          >
            <p>card content</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Array
        },
        span: {
            type: Number,
            default: 8
        }
    },
    computed: {

    }

}
</script>

<style></style>