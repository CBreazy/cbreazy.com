export default function SkillPill({ skill, bgColor = 'bg-neutral-50' }) {
  return (
    <span className={`${bgColor} px-4 py-2 rounded-full text-neutral-900 font-black border-2 border-neutral-900`}>
      {skill}
    </span>
  );
}