<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <I-tooltip class="box-item" effect="dark" content="Top Center prompts info" placement="top">
        <I-button>top</I-button>
      </I-tooltip>
    </div>
    <div class="row">
      <I-tooltip class="box-item" effect="dark" content="Left Center prompts info" placement="left">
        <I-button class="mt-3 mb-3">left</I-button>
      </I-tooltip>
      <I-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <I-button>right</I-button>
      </I-tooltip>
    </div>
    <div class="row center">
      <I-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <I-button>bottom</I-button>
      </I-tooltip>
    </div>
  </div>
</template>

<style>
  .tooltip-base-box {
    width: 600px;
  }
  .tooltip-base-box .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tooltip-base-box .center {
    justify-content: center;
  }
  .tooltip-base-box .box-item {
    margin-top: 10px;
  }
</style>
