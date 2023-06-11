<script lang="ts">
    import Icon from 'component/Icon.svelte'
</script>

<details
    class:dtl={true}
    {...$$restProps}
>
    <summary>
        <slot name="title"/>
        <Icon name="chevron-down" class="fs-sm" expand/>
        <Icon name="chevron-up" class="fs-sm" contract/>
    </summary>
        <!-- <div class="dtl-body"> -->
            <slot name="body"/>
        <!-- </div> -->
</details>

<style lang="sass" global>
    $accentColors: 'primary', 'secondary', 'info', 'success', 'warning', 'error'

    .dtl
        margin-bottom: 1em
        border-radius: .25em
        summary
            display: flex
            justify-content: space-between
            padding: .75em
            background-color: var(--positive-color-30)
            // border: .0625em solid currentColor
            border-top-left-radius: var(--br, .5em)
            border-top-right-radius: var(--br, .5em)
            // font-size: var(--fs-md)
            list-style: none
            cursor: pointer
            user-select: none
            outline: .125em solid transparent
            outline-offset: .0625em
        &:not([open])
            summary
                border-bottom-left-radius: var(--br, .5em)
                border-bottom-right-radius: var(--br, .5em)
                &:hover,
                &:focus
                    outline-color: var(--negative-color-20)
            [contract]
                display: none
        &[open]
            outline: .125em solid var(--negative-color-20)
            outline-offset: .0625em
            &:hover,
            &:focus
                outline-color: var(--negative-color-40)

            summary
                // &:hover,
                // &:focus
                //     outline-color: var(--negative-color-40)
                // &:not(:hover)
                //     color: var(--negative-color-40)
                // border-bottom-color: inherit
            [expand]
                display: none
        // .dtl-body
        //     padding: .75em
        //     background-color: var(--positive-color)
        //     border-bottom-left-radius: .25em
        //     border-bottom-right-radius: .25em
        &-primary
            summary
                background-color: var(--primary-color-m)
                font-weight: 500
            &[open]
                color: var(--primary-color-d)

            &:not([open])
                summary
                    color: var(--primary-color)
                    &:hover,
                    &focus
                        color: var(--primary-color-d)



    details
        // border: .0625em solid currentColor
        // border-radius: .25em
        // padding: .25em .75em
        summary
            // font-size: var(--fs-lg)
            // list-style: none
            // display: inline-grid
            // grid-auto-flow: column
            // grid-gap: .25em
            // justify-content: center
            // align-items: center
            // margin: unset
            // padding: .25em .75em
            // background-color: transparent
            // border: .0625em solid transparent
            // border-radius: .25em
            // vertical-align: middle
            // text-align: center
            // color: currentColor
            // // font-size: var(--key-size)
            // line-height: calc(0.25em + 2ex + 0.25em)
            // text-decoration: none
            // cursor: pointer
            // user-select: none
            // outline: .125em solid transparent
            // outline-offset: .0625em

</style>
<!-- .tf_details {
    summary {
        align-content: center;
        display: flex;
        list-style: none;
        cursor: pointer;
        &::before {
            content: "\f054";
            display: inline-block;
            font: normal normal normal 14px/1 FontAwesome;
            font-size: 50%;
            text-rendering: auto;
            margin: auto .5rem auto 0;
            transition: .25s;
        }
    }
    &[open] {
        summary {
            &::before  {
                transform: rotate(90deg);
            }
        }
    }
} -->