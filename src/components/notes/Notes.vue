<template>
  <div>
    <h3 align="center">Notes</h3>
    <progress-bar :notes="notes" :maxNotes="maxNotes" />
    <new-note @addNote="addNewNote" />
    <note-grid :notes="notes" />
    <div class="row">
      <div class="col-sm-4 col-sm-offset-4 text-center">
        <div class="alert alert-info">INFO: click on a note to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteGrid from "./NoteGrid.vue";
import NewNote from "./NewNote.vue";
import ProgressBar from "./ProgressBar.vue";

export default {
  components: { NoteGrid, NewNote, ProgressBar },
  data() {
    return {
      maxNotes: 12,
      notes: []
    };
  },
  methods: {
    addNewNote(note) {
      this.notes.length < this.maxNotes ? this.notes.unshift(note) : null;
    }
  }
};
</script>
