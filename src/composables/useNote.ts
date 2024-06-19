import type Notes from '~/types/notes'

export const useNote = () => {
  const notes = useState<Notes[]>('notes', () => [])

  // fetch notes
  async function fetchNotes () {
    if (notes.value.length) return
    try {
      const data = await queryContent<Notes>('/notes')
        .where({ _extension: 'md' })
        .sort({ date: -1 })
        .find()
      notes.value = (data as Notes[]).filter(note => note._path !== '/notes')
    } catch (e) {
      notes.value = []
      return e
    }
  }

  return {
    notes,
    fetchNotes
  }
}
