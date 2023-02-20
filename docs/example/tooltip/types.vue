<template>
  <I-tooltip content="Top center" placement="top">
    <I-button>Dark</I-button>
  </I-tooltip>
  <I-tooltip content="Bottom center" placement="bottom" effect="light">
    <I-button>Light</I-button>
  </I-tooltip>

  <I-tooltip content="Bottom center" effect="customized">
    <I-button>Customized theme</I-button>
  </I-tooltip>
</template>

<style>
  .I-tooltip .is-customized {
    padding: 6px 12px;
    background: linear-gradient(90deg, rgb(159 229 151), rgb(204 229 129));
  }

  .I-tooltip .is-customized .I-tooltip__arrow::before {
    background: linear-gradient(45deg, #b2e68d, #bce689);
    right: 0;
  }
</style>
