<template>
    <div class="row">
        <note v-for="(note,index) in notes" :key="note" @click.native="removeNote(index)"> {{note}} </note>
    </div>
</template>

<script>
import Note from './Note.vue'

export default {
    name: 'NoteGrid',
    components: {Note},
    props: {
        notes: {type: Array, required: true}
    },
    methods: {
        removeNote(index) {
            this.notes.splice(index, 1)
        }
    },
}
</script>
