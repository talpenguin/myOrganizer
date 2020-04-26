<template>
  <div>
    <div class="col-sm-12 text-center">
      <hr>
      <div class="progress">
        <div
          class="progress-bar"
          :style="{ width: notes.length * 10 + '%' }"
          :aria-valuenow="notes.length"
          :aria-valuemax="maxNotes"
        >
          {{ notes.length }} / {{ maxNotes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    notes: { type: Array },
    maxNotes: { type: Number }
  }
};
</script>
