export default function SkillPill({ skill, bgColor = 'bg-neutral-50' }) {
  return (
    <span className={`${bgColor} px-2 py-1 text-xs md:px-4 md:py-2 md:text-base rounded-full text-neutral-900 font-black border-2 border-neutral-900`}>
      {skill}
    </span>
  );
}