/** Background colors defined in styles/global.css (.band[data-color=...]). */
const BAND_COLORS = ['blue', 'mint', 'saffron', 'pink'];

/**
 * One full-width colored skill band.
 * Heading levels are configurable so the band fits the outline of the page it's on.
 */
export default function SkillBand({
  band,
  color,
  title,
  groups,
  titleAs: Title = 'h3',
  groupTitleAs: GroupTitle = 'h4',
}) {
  if (import.meta.env.DEV && !BAND_COLORS.includes(color)) {
    console.warn(
      `Skill band "${title}" has color: '${color}'. Use one of: ${BAND_COLORS.join(', ')} (see src/data/skills.js).`,
    );
  }

  return (
    <div className="band" data-band={band} data-color={color}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-[0.8fr_2.2fr] gap-10 lg:gap-16">
        <Title className="text-5xl lg:text-6xl font-bold leading-none tracking-[-0.04em]">{title}</Title>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {groups.map((group) => (
            <div key={group.title} className={groups.length === 1 ? 'sm:col-span-2' : undefined}>
              <GroupTitle className="text-lg font-semibold mb-3">{group.title}</GroupTitle>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
