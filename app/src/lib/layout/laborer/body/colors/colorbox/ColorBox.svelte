<script lang="ts">
    export let l: number = undefined
    export let c: number = undefined
    export let h: number = undefined
    export let offset: number = undefined
    export let alfa: number = undefined
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="10em"
    height="10em"
>
    <path
        class="color-mute"
        fill="oklch({l + offset}% {c} {h} / {alfa})"
        d="M 32 2 L 62 17 L 62 45 L 32 62 L 2 45 L 2 17 L 32 2 Z"
    />
    <path
        class="color-light"
        fill="oklch({l + offset}% {c} {h})"
        d="M 4 18 L 32 32 L 32 60 L 4 44 L 4 18 Z"
    />
    <path
        class="color-default"
        fill="oklch({l}% {c} {h})"
        d="M 4 18 L 32 4 L 60 18 L 32 32 L 4 18 Z"
    />
    <path
        class="color-dark"
        fill="oklch({l - offset}% {c} {h})"
        d="M 32 32 L 60 18 L 60 44 L 32 60 L 32 32 Z"
    />
</svg>

<!-- stroke-linejoin="round" stroke="var(--error-color)" stroke-width="80" stroke-alignment="inner" -->