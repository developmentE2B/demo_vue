<template>
    <div class="input-group">
      <label :for="id">{{ label }}</label>
      <input 
        :id="id" 
        :type="type" 
        :placeholder="placeholder" 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)" 
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginInput',
    props: {
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'text'
      },
      modelValue: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: ''
      }
    }
  };
  </script>
  
  <style scoped>
  .input-group {
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  label {
    font-weight: bold;
  }
  </style>
  