<script lang="ts">
    import Input from 'component/Input.svelte'

    export let inputClass: string = ''
</script>

<section>
    <h3 id="range">Range</h3>
    <div class="display--grid gap--lg">
        <div class="display--flex gap--md flex-wrap--wrap justify-content--evenly padding--md background-color--positive border-radius--md">
            <div class="display--grid grid-template-columns--2 gap--sm">
                <b class="justify-self--end align-self--center">Default</b>
                <div>
                    <Input class={inputClass} type="range"/>
                </div>
                <b class="justify-self--end align-self--center">Active</b>
                <div>
                    <Input class="{inputClass} active" type="range"/>
                </div>
                <b class="justify-self--end align-self--center">Disabled</b>
                <div>
                    <Input class={inputClass} type="range" disabled/>
                </div>
                <b class="justify-self--end align-self--center">Active & Disabled</b>
                <div>
                    <Input class="{inputClass} active" type="range" disabled/>
                </div>
            </div>
        </div>        
    </div>
</section>