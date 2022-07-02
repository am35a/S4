<script lang="ts">
    import Precode from "src/components/Precode.svelte"
    import Button from "src/components/Button.svelte"

    let verticalAlign:string = ''
    let verticalAlignArr = {
        auto: '',
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4'
    }

</script>

<section>
    <div class="h2" aria-level={2} role="heading">Alignment</div>
    <div class="d-grid">
        <div class="h3" aria-level={3} role="heading">Vertical alignment</div>
        <div class="d-grid">
            <div class="h4" aria-level={4} role="heading">Inline container</div>
            <p>...</p>
            <div class="d-grid g-2 p-2 bg-positive rounded-md">
                <div class="d-inline-flex flex-wrap g-2">
                    {#each Object.entries(verticalAlignArr) as [key, value]}
                        <Button
                            class="btn-secondary {verticalAlign === value ? 'active' : ''}"
                            on:click = {() => verticalAlign = value}
                            disabled={verticalAlign === value}
                        >{key}</Button>
                    {/each}
                </div>
                <div class="d-grid g-2" style="--lh: {verticalAlign}">
                    <div class="lh col-span-full row-span-full my-auto border-bottom border-top border-secondary">&nbsp;<!-- base line indicator--></div>
                    <div class="lh col-span-full row-span-full my-auto border-bottom"><!-- base line indicator--></div>
                    <div class="lh col-span-full row-span-full py-4">
                        <span class="bg-primary px-1 rounded align-baseline">Baseline</span>
                        <span class="bg-primary px-1 rounded align-sub">Sub</span>
                        <span class="bg-primary px-1 rounded align-super">Super</span>
                        <span class="bg-primary px-1 rounded align-top">Top</span>
                        <span class="bg-primary px-1 rounded align-middle">Middle</span>
                        <span class="bg-primary px-1 rounded align-bottom">Bottom</span>
                        <span class="bg-primary px-1 rounded align-text-bottom">Text bottom</span>
                        <span class="bg-primary px-1 rounded align-text-top">Text top</span>
                    </div>
                </div>
                <Precode>
                    {
`<span class="align-baseline">Baseline</span>
<span class="align-sub">Sub</span>
<span class="align-super">Super</span>
<span class="align-top">Top</span>
<span class="align-middle">Middle</span>
<span class="align-bottom">Bottom</span>
<span class="align-text-bottom">Text bottom</span>
<span class="align-text-top">Text top</span>`
                    }
                </Precode>
            </div>
        </div>
        <div class="d-grid">
            <div class="h4" aria-level={4} role="heading">Table cells container</div>
            <p>Use values "top", "middle" and "bottom" for vertical alignmet into table sells.</p>
            <div class="d-grid g-2 p-2 bg-positive rounded-md">
                <table style="height: 64rem;">
                    <tr>
                        <td class="border align-baseline">Baseline</td>
                        <td class="border align-top">Top</td>
                        <td class="border align-middle">Middle</td>
                        <td class="border align-bottom">Bottom</td>
                    </tr>
                </table>
                <Precode>
                    {
`<table>
    <tr>
        <td class="border align-baseline">Baseline</td>
        <td class="border align-top">Top</td>
        <td class="border align-middle">Middle</td>
        <td class="border align-bottom">Bottom</td>
    </tr>
</table>`
                    }
                </Precode>
            </div>
        </div>
    </div>
    <div class="d-grid">
        <div class="h3" aria-level={3} role="heading">Justify</div>
        <div class="grid">
            <div class="h4" aria-level={4} role="heading">Content</div>
            <p>...</p>
            <p class="color-info">The properties works only for flexbox and grid containers!</p>
            <div class="d-grid g-2 p-2 bg-positive rounded-md">
                <div class="d-grid g-4">
                    <div class="d-flex g-2 bg-negative-10 p-2 justify-content-start">
                        <div class="bg-negative-10 p-2">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                    <div class="d-flex g-2 bg-negative-10 p-2 justify-content-end">
                        <div class="bg-negative-10 p-2">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                    <div class="d-flex g-2 bg-negative-10 p-2 justify-content-center">
                        <div class="bg-negative-10 p-2">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                    <div class="d-flex g-2 bg-negative-10 p-2 justify-content-between">
                        <div class="bg-negative-10 p-2">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                    <div class="d-flex g-2 bg-negative-10 p-2 justify-content-around">
                        <div class="bg-negative-10 p-2">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                    <div class="d-flex g-2 bg-negative-10 p-2 justify-content-evenly">
                        <div class="bg-negative-10 p-2">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid">
            <div class="h4" aria-level={4} role="heading">Items</div>
            <p>...</p>
            <p class="color-warning">The properties works only for grid container!</p>
            <div class="d-grid g-2 p-2 bg-positive rounded-md">
                <div class="d-grid g-4">
                    <div class="d-grid cols-2 g-2 bg-error p-2 justify-items-baseline">
                        <div class="bg-negative-10 p-2">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                    <div class="d-grid cols-2 g-2 bg-negative-10 p-2 justify-items-center">
                        <div class="bg-negative-10 p-2">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                    <div class="d-grid cols-2 g-2 bg-negative-10 p-2 justify-items-end">
                        <div class="bg-negative-10 p-2">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                    <div class="d-grid cols-2 g-2 bg-negative-10 p-2 justify-items-start">
                        <div class="bg-negative-10 p-2">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                    <div class="d-grid cols-2 g-2 bg-negative-10 p-2 justify-items-stretch">
                        <div class="bg-negative-10 p-2">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid">
            <div class="h4" aria-level={4} role="heading">Self</div>
            <p>The justify-self-... utilities sets the way a box is justified inside its alignment container along the appropriate axis.</p>
            <p class="color-warning">The properties works only for grid container!</p>
            <div class="d-grid g-2 p-2 bg-positive rounded-md">
                <div class="d-grid g-4">
                    <div class="d-grid cols-2 g-2 bg-negative-10 p-2">
                        <div class="bg-negative-10 p-2 justify-self-start">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                    <div class="d-grid cols-2 g-2 bg-negative-10 p-2">
                        <div class="bg-negative-10 p-2 justify-self-center">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                    <div class="d-grid cols-2 g-2 bg-negative-10 p-2">
                        <div class="bg-negative-10 p-2 justify-self-end">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                    <div class="d-grid cols-2 g-2 bg-negative-10 p-2">
                        <div class="bg-negative-10 p-2 justify-self-stretch">one</div>
                        <div class="bg-negative-10 p-2">two</div>
                        <div class="bg-negative-10 p-2">three</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>