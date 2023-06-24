<script lang="ts">
    export let colorName: string = undefined
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="10em"
    height="10em"
>
    <path
        class="color-mute"
        fill="var(--{colorName}-color-m)"
        d="M 32 2 L 62 17 L 62 45 L 32 62 L 2 45 L 2 17 L 32 2 Z"
    />
    <path
        class="color-light"
        fill="var(--{colorName}-color-l)"
        d="M 4 18 L 32 32 L 32 60 L 4 44 L 4 18 Z"
    />
    <path
        class="color-default"
        fill="var(--{colorName}-color)"
        d="M 4 18 L 32 4 L 60 18 L 32 32 L 4 18 Z"
    />
    <path
        class="color-dark"
        fill="var(--{colorName}-color-d)"
        d="M 32 32 L 60 18 L 60 44 L 32 60 L 32 32 Z"
    />
</svg>

<!-- stroke-linejoin="round" stroke="var(--error-color)" stroke-width="80" stroke-alignment="inner" -->