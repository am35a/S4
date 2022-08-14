<script lang="ts">
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let displayNone: boolean = false
</script>

<section>
    <h3 id="displayBox">Box</h3>
    <p>
        Using a d-none class make an element as removed from DOM tree.
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2">
            <Button
                class="btn-secondary {displayNone ? 'active' : ''}"
                on:click = {() => displayNone = !displayNone}
            >d-none {displayNone ? 'on' : 'off'}</Button>
        </div>
        <div class="d-grid g-2">
            <div class="{displayNone ? 'd-none' : 'd-block'}">
                <span class="bgc-negative-10 p-4">span</span>
                <div class="bgc-negative-10 p-4">div</div>
            </div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="${displayNone ? 'd-none' : 'd-block'}">
    <span>span</span>
    <div>div</div>
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>