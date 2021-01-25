import { ref, getCurrentInstance } from 'vue'

// To be used for the custom component
// used on a Dialog plugin

export default function ({ emit }) {
  // we need a Vue reference to the QDialog
  // component so we can handle it;
  // <q-dialog ref="dialogRef" ...
  // make sure that the setup() in which this
  // function is called returns dialogRef variable
  const dialogRef = ref(null)

  function show () { dialogRef.value.show() }
  function hide () { dialogRef.value.hide() }
  function onDialogHide () { emit('hide') }

  // expose public methods required by Dialog plugin
  const vm = getCurrentInstance()
  Object.assign(vm.proxy, { show, hide })

  return { dialogRef, onDialogHide, show, hide }
}
