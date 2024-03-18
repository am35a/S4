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
            class="display--grid g-2 w p-2 background-color--positive border-radius--md border-style--solid border-color--negative-30"
            style="--w: 16em"
        >
            <button class="btn justify-content--start px-1" type="reset">
                <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                <span class="truncate">Color palette</span>
            </button>
            <button class="btn justify-content--start px-1" type="reset">
                <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                <span class="truncate">Color palette</span>
            </button>
            <button class="btn justify-content--start px-1" type="reset">
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
        > .btn
            position: relative
        > .drp-content
            position: absolute
            width: max-content
            // padding: 0
            transition: opacity .15s linear .15s, visibility .15s linear .15s

        > .btn[data-position]
            &::after
                content: ''
                position: absolute
                border-radius: var(--size-1)
                background-color: currentColor
            
        > .btn[data-position^="left"]
            &::after
                width: calc(var(--size-1) / 2)
                left: calc(var(--size-1) / 1.25)
                top: var(--size-2)
                bottom: var(--size-2)
            + .drp-content
                right: 100%
                padding-right: var(--size-1)
            &[data-position$="top"] + .drp-content
                bottom: 0%
            &[data-position$="center"] + .drp-content
                top: 50%
                transform: translateY(-50%)
            &[data-position$="bottom"] + .drp-content
                top: 0%

        > .btn[data-position^="top"]
            &::after
                height: calc(var(--size-1) / 2)
                left: var(--size-2)
                top: calc(var(--size-1) / 1.25)
                right: var(--size-2)
            + .drp-content
                bottom: 100%
                padding-bottom: var(--size-1)
            &[data-position$="left"] + .drp-content
                right: 0%
            &[data-position$="center"] + .drp-content
                left: 50%
                transform: translateX(-50%)
            &[data-position$="right"] + .drp-content
                left: 0%

        > .btn[data-position^="right"]
            &::after
                width: calc(var(--size-1) / 2)
                top: var(--size-2)
                right: calc(var(--size-1) / 1.25)
                bottom: var(--size-2)
            + .drp-content
                left: 100%
                padding-left: var(--size-1)
            &[data-position$="top"] + .drp-content
                bottom: 0%
            &[data-position$="center"] + .drp-content
                top: 50%
                transform: translateY(-50%)
            &[data-position$="bottom"] + .drp-content
                top: 0%

        > .btn[data-position^="bottom"]
            &::after
                height: calc(var(--size-1) / 2)
                left: var(--size-2)
                right: var(--size-2)
                bottom: calc(var(--size-1) / 1.25)
            + .drp-content
                top: 100%
                padding-top: var(--size-1)
            &[data-position$="left"] + .drp-content
                right: 0%
            &[data-position$="center"] + .drp-content
                left: 50%
                transform: translateX(-50%)
            &[data-position$="right"] + .drp-content
                left: 0%

        > .btn[data-position="center center"] + .drp-content
            left: 50%
            top: 50%
            transform: translate(-50%, -50%)

        > .drp-content
            visibility: hidden
            opacity: 0

    .drpdwn-hover
        > .btn:hover + .drp-content,
        // > .btn.open + .drp-content,
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