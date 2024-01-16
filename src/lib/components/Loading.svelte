<div class="loader"></div>

<style>
  .loader {
    border: 1em solid #f3f3f3; /* Light grey */
    border-top: 1em solid currentColor; /* Blue */
    border-radius: 50%;
    width: 7em;
    height: 7em;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
