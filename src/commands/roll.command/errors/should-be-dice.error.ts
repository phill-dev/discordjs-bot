import { CommandInteraction } from 'discord.js';
import RollCommandStringOption from '../../types/RollCommandStringOption';
// types
import ErrorEmbed from '../../types/ErrorEmbed';

export default async function throwErrorShouldBeDice(
    interaction: CommandInteraction,
    option: RollCommandStringOption
): Promise<void> {
    const embed = ErrorEmbed.setDescription(
        `**The input for** \`${option.name}\` **needs to be a dice:**\n` +
            '```[dice count]D[dice eyes]```' +
            'Like : `3D6`, `1D20`\n\n' +
            'Your input was:' +
            `\`\`\`${option.value}\`\`\``
    );

    await interaction.editReply({ embeds: [embed] });
}