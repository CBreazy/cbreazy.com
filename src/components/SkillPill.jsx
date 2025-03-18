export default function SkillPill({ skill, bgColor = 'bg-gray-200' }) {
  return (
    <span className={`${bgColor} px-4 py-2 rounded-full text-neutral-800`}>
      {skill}
    </span>
  );
}