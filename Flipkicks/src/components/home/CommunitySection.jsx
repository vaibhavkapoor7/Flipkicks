
const CommunitySection = ({ members = [] }) => {
  return (
    <section className="community-section">
      <div className="community-section__intro">
        <h2>Join the community</h2>
        <p>Share your style, discover trends, and connect with fellow sneakerheads.</p>
      </div>
      <div className="community-section__members">
        {members.map((member) => (
          <div key={member.id} className="community-section__member">
            <span>{member.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CommunitySection
