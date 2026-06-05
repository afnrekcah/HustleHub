
export default function WorkerProfile() {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b', fontFamily: 'sans-serif', paddingBottom: '40px' }}>
      
      {/* 1. TOP NAVIGATION BAR */}
      <header style={{ backgroundColor: 'white', padding: '15px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', sticky: 'top' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ fontSize: '20px', color: '#64748b', cursor: 'pointer', fontWeight: 'bold' }}>←</span>
          <h1 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#1e3a8a' }}>HustleHub</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '20px', color: '#64748b', cursor: 'pointer' }}> Bell 🔔 </span>
          <div style={{ width: '32px', height: '32px', backgroundColor: '#1e3a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8rem', fontWeight: 'bold' }}>
            AR
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER FOR THE BODY */}
      <main style={{ maxWidth: '480px', margin: '0 auto', padding: '15px' }}>
        
        {/* 2. THE MAIN HERO PROFILE CARD */}
        <section style={{ backgroundColor: 'white', borderRadius: '16px', padding: '25px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '20px', border: '1px solid #e2e8f0', position: 'relative', marginTop: '10px' }}>
          
          {/* Verified Student Badge */}
          <div style={{ display: 'inline-block', backgroundColor: '#d1fae5', color: '#065f46', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '15px' }}>
            ✓ Verified Student
          </div>

          {/* Profile Picture Circle */}
          <div style={{ width: '110px', height: '110px', backgroundColor: '#bfdbfe', color: '#1e3a8a', borderRadius: '50%', margin: '0 auto 15px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.8rem', fontWeight: 'bold' }}>
            AR
          </div>

          {/* Worker Name & University Title */}
          <h2 style={{ fontSize: '1.7rem', fontWeight: 'bold', color: '#0f172a', margin: '0 0 6px 0' }}>Alex Rivera</h2>
          <p style={{ fontSize: '0.85rem', color: '#1e3a8a', margin: '0 0 20px 0', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Engineering Senior @ University of Buea
          </p>

          {/* Stats Row (Rating & Trust Score) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', borderTop: '1px solid #f1f5f9', paddingTop: '15px', marginBottom: '15px' }}>
            <div>
              <p style={{ margin: '0', fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a' }}>⭐ 4.9 / 5</p>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>Rating</p>
            </div>
            <div style={{ width: '1px', backgroundColor: '#e2e8f0' }}></div>
            <div>
              <p style={{ margin: '0', fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a' }}>🛡️ 98%</p>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>Trust Score</p>
            </div>
          </div>
          
          {/* Completed Jobs Strip */}
          <div style={{ backgroundColor: '#eff6ff', padding: '8px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', justifyCenter: 'center', gap: '6px', width: '100%' }}>
            <span style={{ color: '#1e40af', fontWeight: 'bold', fontSize: '0.9rem', margin: '0 auto' }}>✓ 50+ Jobs Completed</span>
          </div>
          
        </section>


        {/* 3. PROFESSIONAL SUMMARY SECTION */}
        <section style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '12px', color: '#1e3a8a' }}>Professional Summary</h3>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: '0' }}>
            Reliable and detail-oriented student with a passion for efficiency. I've been helping local residents and businesses through HustleHub for over a year, maintaining a near-perfect rating. Whether it's academic tutoring, home organization, or heavy lifting, I bring a professional attitude and a commitment to excellence to every task.
          </p>
        </section>


        {/* 4. EXPERTISE & SKILLS SECTION (2-Column Grid) */}
        <section style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '15px', color: '#1e3a8a' }}>Expertise & Skills</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            
            {/* Row 1 */}
            <div style={{ backgroundColor: 'white', padding: '10px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px', border: '1px dashed #cbd5e1' }}>
              📚 <span>Tutoring</span>
            </div>
            <div style={{ backgroundColor: 'white', padding: '10px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px', border: '1px dashed #cbd5e1' }}>
              🧹 <span>Cleaning</span>
            </div>

            {/* Row 2 */}
            <div style={{ backgroundColor: 'white', padding: '10px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px', border: '1px dashed #cbd5e1' }}>
              🧺 <span>Washing</span>
            </div>
            <div style={{ backgroundColor: 'white', padding: '10px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px', border: '1px dashed #cbd5e1' }}>
              🛒 <span>Shopping</span>
            </div>

            {/* Row 3 */}
            <div style={{ backgroundColor: 'white', padding: '10px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px', border: '1px dashed #cbd5e1' }}>
              💪 <span>Heavy Lifting</span>
            </div>
            <div style={{ backgroundColor: 'white', padding: '10px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px', border: '1px dashed #cbd5e1' }}>
              🔧 <span>Tech Support</span>
            </div>

          </div>
        </section>


        {/* 5. RECENT REVIEWS SECTION (New from your UI screenshot!) */}
        <section style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e3a8a', margin: '0' }}>Recent Reviews</h3>
            <span style={{ fontSize: '0.85rem', color: '#1e40af', fontWeight: '600', cursor: 'pointer' }}>View All 48</span>
          </div>

          {/* Review Card 1 */}
          <div style={{ border: '1px solid #f1f5f9', borderRadius: '12px', padding: '15px', backgroundColor: '#f8fafc', marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <h4 style={{ margin: '0', fontSize: '0.95rem', fontWeight: 'bold', color: '#0f172a' }}>Sarah Jenkins</h4>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.75rem', color: '#64748b' }}>2 days ago • Cleaning Service</p>
              </div>
              <span style={{ color: '#f59e0b', fontSize: '0.85rem' }}>⭐⭐⭐⭐⭐</span>
            </div>
            <p style={{ margin: '0', fontSize: '0.88rem', color: '#475569', lineHeight: '1.5', fontStyle: 'italic' }}>
              "Alex was incredibly professional and efficient. He arrived on time and did a thorough job. Highly recommend for any home tasks!"
            </p>
          </div>

          {/* Review Card 2 */}
          <div style={{ border: '1px solid #f1f5f9', borderRadius: '12px', padding: '15px', backgroundColor: '#f8fafc' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <h4 style={{ margin: '0', fontSize: '0.95rem', fontWeight: 'bold', color: '#0f172a' }}>Michael Chen</h4>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.75rem', color: '#64748b' }}>1 week ago • Math Tutoring</p>
              </div>
              <span style={{ color: '#f59e0b', fontSize: '0.85rem' }}>⭐⭐⭐⭐⭐</span>
            </div>
            <p style={{ margin: '0', fontSize: '0.88rem', color: '#475569', lineHeight: '1.5', fontStyle: 'italic' }}>
              "Excellent tutor! Helped me understand difficult complex calculus topics in just two sessions. Very patient."
            </p>
          </div>

        </section>

      </main>
    </div>
  );
}