<script lang="ts">
    export let level: number = 1
</script>
<div
    class="h{level}"
    aria-level={level}
    role="heading"
><slot></slot></div>
