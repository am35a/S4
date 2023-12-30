<script lang="ts">
    // https://github.com/hperrin/svelte-material-ui/tree/master/packages
    
    // if ($$restProps.type != 'reset' && $$restProps.type != 'submit')
    //     $$restProps.type = 'button'
</script>

<div
    {...$$restProps}
>
    <slot name="btn" />
    <div
        class="drp-content"
    >
        <slot name="content" />
        <!-- <div
            class="d-grid g-2 w p-2 bgc-positive br border border-negative-30"
            style="--w: 16rem"
        >
            <button class="btn jc-start px-1" type="reset">
                <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                <span class="truncate">Color palette</span>
            </button>
            <button class="btn jc-start px-1" type="reset">
                <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                <span class="truncate">Color palette</span>
            </button>
            <button class="btn jc-start px-1" type="reset">
                <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                <span class="truncate">Color palette</span>
            </button>
        </div> -->
    </div>
</div>

<style lang="sass" global>
    .drpdwn-hover,
    .drpdwn-focus
        position: relative
        display: inline-grid
        > .drp-content
            position: absolute
            width: max-content
            // padding: 0
            transition: all .15s linear .15s

        > .btn[data-position^="left"]
            + .drp-content
                right: 100%
                padding-right: var(--size-1)
            &[data-position$="top"] + .drp-content
                bottom: 0%
            &[data-position$="bottom"] + .drp-content
                top: 0%

        > .btn[data-position^="top"]
            + .drp-content
                bottom: 100%
                padding-bottom: var(--size-1)
            &[data-position$="left"] > .drp-content
                right: 0%
            &[data-position$="right"] > .drp-content
                left: 0%

        > .btn[data-position^="right"]
            + .drp-content
                left: 100%
                padding-left: var(--size-1)
            &[data-position$="top"] + .drp-content
                bottom: 0%
            &[data-position$="bottom"] + .drp-content
                top: 0%

        > .btn[data-position^="bottom"]
            + .drp-content
                top: 100%
                padding-top: var(--size-1)
            &[data-position$="left"] > .drp-content
                right: 0%
            &[data-position$="right"] > .drp-content
                left: 0%

        > .drp-content
            visibility: hidden
            opacity: 0

    .drpdwn-hover
        > .btn:hover + .drp-content,
        > .drp-content:hover,
        > .drp-content:focus-within
            visibility: visible
            opacity: 1
            z-index: 1
            
    .drpdwn-focus
        > .btn:focus-within + .drp-content,
        > .drp-content:hover,
        > .drp-content:focus-within
            visibility: visible
            opacity: 1
            z-index: 1

        // > .btn:hover[data-position^="right"] + .drp-content,
        // > .btn[data-position^="right"] + .drp-content:hover,
        // > .btn[data-position^="right"] + .drp-content:focus-within
        //     padding-left: var(--size-1)

</style>