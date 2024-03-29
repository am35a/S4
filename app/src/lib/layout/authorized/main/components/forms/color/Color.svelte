<script lang="ts">
    import Input from 'component/Input.svelte'

    export let inputClass: string = ''
</script>

<section>
    <h3 id="color">Color</h3>
    <div class="display--grid gap--lg">
        <div class="display--flex gap--md flex-wrap--wrap justify-content--evenly padding--md background-color--positive border-radius--md">
            <div class="display--grid grid-template-columns--2 gap--sm">
                <b class="justify-self--end align-self--center">Default</b>
                <div>
                    <Input class={inputClass} value="#00cc00" type="color"/>
                </div>
                <b class="justify-self--end align-self--center">Active</b>
                <div>
                    <Input class="{inputClass} active" value="#00cc00" type="color"/>
                </div>
                <b class="justify-self--end align-self--center">Disabled</b>
                <div>
                    <Input class={inputClass} type="color" value="#00cc00" disabled/>
                </div>
                <b class="justify-self--end align-self--center">Active & Disabled</b>
                <div>
                    <Input class="{inputClass} active" value="#00cc00" type="color" disabled/>
                </div>
            </div>
        </div>        
    </div>
</section>