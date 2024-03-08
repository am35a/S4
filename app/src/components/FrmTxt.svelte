<script lang="ts">
    export let value: string = ''
    const UID: string = self.crypto.randomUUID()
</script>

<div class="d-contents">
{#if $$slots.label}
    <label
        for={UID}
        class="frm-label">
        <slot name="label"/>
    </label>
{/if}
<input
    id={UID}
    class:frm={true}
    {...$$restProps}
    bind:value
    type="text"
/>
</div>

<style lang="sass" global>
    .frm-label
        // display: block
    [type='text'].frm
        display: inline-grid
        margin: unset
        padding: var(--size-1) var(--size-3)
        background-color: var(--positive-color)
        border: none
        border-radius: var(--size-1)
        color: currentColor
        line-height: var(--lh)
        outline-width: 1px
        outline-style: solid
        outline-color: transparent
        outline-offset: -1px
        &-alt
            background-color: var(--negative-color-10)
        &-outline
            outline-color: var(--negative-color-10)
            outline-offset: -1px
</style>