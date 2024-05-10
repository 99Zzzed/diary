<template>
  <div class="terminal-loader">
    <div class="terminal-header">
      <div class="terminal-title">Задача</div>
      <div class="terminal-controls">
        <div class="control close"></div>
        <div class="control minimize"></div>
        <div class="control maximize"></div>
      </div>
    </div>
    <div class="content">
      <div class="text">Создай задачу...</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@keyframes blinkCursor {
  50% {
    border-right-color: transparent;
  }
}

@keyframes typeAndDelete {
  0%,
  10% {
    width: 0;
  }

  45%,
  55% {
    width: 8em;
  }

  90%,
  100% {
    width: 0;
  }
}

.terminal-loader {
  width: 100%;
  max-width: 400px;
  height: 200px;
  background: blueviolet;
  border: 1px solid #ffffff3e;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}

.terminal-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #343434;
  padding: 6px;
}

.terminal-controls {
  position: absolute;
  left: 10px;
  display: flex;
  gap: 7px;
}

.control {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #777;
}

.control.close {
  background-color: blueviolet;
}

.control.minimize {
  background-color: blueviolet;
}

.control.maximize {
  background-color: blueviolet;
}

.terminal-title {
  color: #eeeeeec1;
}

.content {
  padding: 10px;
}
.text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid green;
  animation: typeAndDelete 4s steps(11) infinite,
  blinkCursor 0.5s step-end infinite alternate;
  color: white;
  font-weight: 600;
}

</style>