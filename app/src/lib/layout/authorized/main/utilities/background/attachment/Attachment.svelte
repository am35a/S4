<script>
    import Precode from 'component/Precode.svelte'

    let attachmentsArr = ['scroll', 'fixed', 'local']
</script>

<section>
    <h3 id="attachment">Attachment</h3>
    <p>
        Add the <b>background-attachment--{attachmentsArr.join('/')}</b> classes to container to work with background-attachment.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                {#each attachmentsArr as attachment}
                    <div
                        class="p-2 h o-auto background-image background-color--negative-10 background-attachment--{attachment}"
                        style="--background-image: url(/images/logo.svg); --h: 5em"
                    >
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur et optio eveniet tempora molestiae animi possimus, dolorem voluptatem itaque error odio tempore expedita iusto consequatur vitae sapiente inventore incidunt voluptatum.</p>
                        <p>Ducimus sit voluptatibus quaerat maxime accusamus, earum similique facere totam voluptas est, dolorum molestias eligendi incidunt nisi? Atque explicabo a neque animi odio veritatis quia quos libero, aspernatur nesciunt laudantium?</p>
                        <p>Praesentium labore animi vitae velit facere ducimus eum nostrum delectus! Magnam expedita, a facere ut quasi eum dolorum quisquam quam dolore, est nemo dolores minus placeat debitis doloremque ipsum dolor!</p>
                        <p>Minus aperiam doloremque exercitationem. Aspernatur consequatur quo quibusdam impedit cum minus rerum omnis. Atque explicabo quibusdam consectetur enim doloribus consequuntur, consequatur maxime cum impedit cupiditate veniam harum accusamus perferendis quis!</p>
                        <p>Nesciunt at magni vitae magnam maiores sapiente dolorum corrupti laboriosam, minima voluptates omnis aliquam tenetur culpa possimus perferendis voluptatum, eveniet perspiciatis ipsa vel odio laudantium doloremque natus! Quibusdam, corrupti doloremque!</p>
                    </div>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {#each attachmentsArr as attachment}
                    {
`<div
    class="background-image background-attachment--${attachment}"
    style="--background-image: url(...)"
> ... </div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>