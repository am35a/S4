<script lang="ts">
    import Icon from 'component/Icon.svelte'
    import Button from 'component/Button.svelte'
    import DropDown from 'component/DropDown.svelte'
    import Precode from 'component/Precode.svelte'
</script>

<article>
    <h2 id="dropdown">Dropdown</h2>
    <p>
        To create self destroyed alerts, add the class name - <b>drpdwn-hover</b>.
    </p>
    <div class="d-grid g-2">
        <div>
            <DropDown class="drpdwn-hover">
                <Button 
                    slot="btn"
                    class="btn-alt"
                    data-position="right bottom"
                ><Icon name="ghost"/>Svelte button</Button>
                <div
                    slot="content"
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
                </div>
            </DropDown>
        </div>
        <div>

            <div class="drpdwn-hover">
                <button
                    class="btn btn-alt"
                    data-position="right bottom"
                >
                    html
                </button>
                <div
                    class="drp-content"
                >
                    <div
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
                    </div>
                </div>
            </div>

        </div>
    </div>

</article>
