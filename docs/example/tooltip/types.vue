<template>
  <i-tooltip content="Top center" placement="top">
    <I-button>Dark</I-button>
  </i-tooltip>
  <i-tooltip content="Bottom center" placement="bottom" effect="light">
    <I-button>Light</I-button>
  </i-tooltip>

  <i-tooltip content="Bottom center" effect="customized">
    <I-button>Customized theme</I-button>
  </i-tooltip>
</template>

<style>
  .i-tooltip .is-customized {
    padding: 6px 12px;
    background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
  }

  .i-tooltip .is-customized .i-tooltip__arrow::before {
    background: linear-gradient(45deg, #b2e68d, #bce689);
    right: 0;
  }
</style>
