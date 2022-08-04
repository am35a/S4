<script lang="ts">
    import Icon from "component/Icon.svelte"
    import Button from "component/Button.svelte"
    import Precode from "component/Precode.svelte"

    let buttonsName = {
        primary: 'Primary',
        secondary: 'Secondary',
        info: 'Info',
        success: 'Success',
        warning: 'Warning',
        error: 'Error'
    }
</script>

<section>
    <div class="h2" aria-level={2} role="heading">Buttons</div>
    <!-- <Button class="btn btn-sm"><Icon name="close-o"/> Close</Button>
    <Button class="btn btn-alt btn-sm"><Icon name="close-o"/> Close</Button> -->
    <div class="d-grid">
        <div class="h3" aria-level={3} role="heading">Views</div>
        <p>S4 buttons have two main views - standard and alternative. From these views, you can get any other kind of buttons.</p>
        <div class="d-grid g-2 overflow-x-auto">
            <div class="h4" aria-level={4} role="heading">Standard</div>
            <div class="d-inline-grid grid-flow-col g-2 text-nowrap max-w-fit justify-items-start overflow-x-auto rounded">
                <div class="d-grid rows-5 g-2 px-2 position-sticky left-0 bg-positive rounded">
                    <div class="fw-600 fs-s2 d-grid">
                        <div class="row-span-full col-span-full mt-auto mr-auto fs-xs">State</div>
                        <div class="row-span-full col-span-full m-auto">\</div>
                        <div class="row-span-full col-span-full ml-auto mb-auto fs-xs">Color</div>
                    </div>
                    <div class="fw-600 my-auto ml-auto">Default</div>
                    <div class="fw-600 my-auto ml-auto">Active</div>
                    <div class="fw-600 my-auto ml-auto">Disabled</div>
                    <div class="fw-600 my-auto ml-auto">Act + Dis</div>
                </div>
                {#each Object.entries(buttonsName) as [key, value]}
                    <div class="d-grid rows-5 g-2">
                        <div class="fw-600 m-auto">{value}</div>
                        <Button class="btn-{key}">{value}</Button>
                        <Button class="btn-{key} active">{value}</Button>
                        <Button class="btn-{key}" disabled>{value}</Button>
                        <Button class="btn-{key} active" disabled>{value}</Button>
                    </div>
                {/each}
            </div>
            <Precode>
                {
`...`
                }
            </Precode>
        </div>

        <div class="d-grid g-2">
            <div class="h4" aria-level={4} role="heading">Alternative</div>
            <div class="d-inline-grid grid-flow-col g-2 text-nowrap max-w-fit justify-items-start overflow-x-auto rounded">
                <div class="d-grid rows-5 g-2 px-2 position-sticky left-0 bg-positive rounded">
                    <div class="fw-600 fs-s2 d-grid">
                        <div class="row-span-full col-span-full mt-auto mr-auto fs-xs">State</div>
                        <div class="row-span-full col-span-full m-auto">\</div>
                        <div class="row-span-full col-span-full ml-auto mb-auto fs-xs">Color</div>
                    </div>
                    <div class="fw-600 my-auto ml-auto">Default</div>
                    <div class="fw-600 my-auto ml-auto">Active</div>
                    <div class="fw-600 my-auto ml-auto">Disabled</div>
                    <div class="fw-600 my-auto ml-auto">Act + Dis</div>
                </div>
                {#each Object.entries(buttonsName) as [key, value]}
                    <div class="d-grid rows-5 g-2">
                        <div class="fw-600 m-auto">{value}</div>
                        <Button class="btn-alt-{key}">{value}</Button>
                        <Button class="btn-alt-{key} active">{value}</Button>
                        <Button class="btn-alt-{key}" disabled>{value}</Button>
                        <Button class="btn-alt-{key} active" disabled>{value}</Button>
                    </div>
                {/each}
            </div>
            <Precode>
                {
`...`
                }
            </Precode>
        </div>
    </div>

    <div class="d-grid g-2">
        <div class="h4" aria-level={4} role="heading">Type</div>
        <div>
            <Button class="btn-primary" type="submit">Submit</Button>
            <Button class="btn-primary" type="reset">Reset</Button>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div>
    
    <div class="d-grid g-2">
        <div class="h4" aria-level={4} role="heading">Size</div>
        <div>
            <Button class="btn-primary btn-xxs">Smallest</Button>
            <Button class="btn-primary btn-xs">Smaller</Button>
            <Button class="btn-primary btn-sm">Small</Button>
            <Button class="btn-primary btn-md">Medium</Button>
            <Button class="btn-primary btn-lg">Large</Button>
            <Button class="btn-primary btn-xl">Larger</Button>
            <Button class="btn-primary btn-xxl">Largest</Button>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div>

    <div class="d-grid g-2">
        <div class="h4" aria-level={4} role="heading">With icon</div>
        <div>
            <Button class="btn-primary"><Icon name="ghost"/>On the left</Button>
            <Button class="btn-primary">On the right<Icon name="ghost"/></Button>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div>

    <div class="d-grid g-2">
        <div class="h4" aria-level={4} role="heading">Icon</div>
        <div>
            <Button class="btn-primary btn-ico btn-xxs"><Icon name="ghost"/></Button>
            <Button class="btn-primary btn-ico btn-xs"><Icon name="ghost"/></Button>
            <Button class="btn-primary btn-ico btn-sm"><Icon name="ghost"/></Button>
            <Button class="btn-primary btn-ico"><Icon name="ghost"/></Button>
            <Button class="btn-primary btn-ico btn-lg"><Icon name="ghost"/></Button>
            <Button class="btn-primary btn-ico btn-xl"><Icon name="ghost"/></Button>
            <Button class="btn-primary btn-ico btn-xxl"><Icon name="ghost"/></Button>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div>

    <div class="d-grid g-2">
        <div class="h4" aria-level={4} role="heading">Border</div>
        <div>
            <Button class="btn-alt-primary border">Primary</Button>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div>

    <div class="d-grid g-2">
        <div class="h4" aria-level={4} role="heading">Style mixed</div>
        <div>
            <Button class="btn-alt-primary border-warning bg-positive"><Icon class="color-success" name="ghost"/>On the left</Button>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div>
    
</section>