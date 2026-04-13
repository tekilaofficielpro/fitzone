import styles from "./animationCSS";
import { useState } from "react";

export const Formulaire = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      const [status, setStatus] = useState('') // '', 'loading', 'success', 'error'
    
      const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value })
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
    
        try {
          const res = await fetch('http://localhost:3001/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              message: `Phone: ${form.phone}\nSubject: ${form.subject}\n\n${form.message}`
            }),
          })
    
          const data = await res.json()
          
    
          if (data.success) {
            setStatus('success')
            setForm({ name: '', email: '', phone: '', subject: '', message: '' })
          } else {
            setStatus('error')
          }
        } catch {
          setStatus('error')
        }
      }
  return (
    <>
    <style>{styles}</style>
    <div className="w-[616.67px] flex flex-row h-[36px] gap-[16px] mb-8">
              <h1 className="font-black text-[30px] text-[#E5E2E1] leading-[36px] tracking-[-1.5px] align-middle">SEND US A</h1>
              <h1 className="font-black text-[30px] text-[#E8000D] leading-[36px] tracking-[-1.5px] align-middle">MESSAGE</h1>
            </div>

            <form className='w-[616.67px] h-[479px]' onSubmit={handleSubmit}>
              <ul className='flex flex-col gap-[24px]'>
                <li className='w-[616px] h-[81px] flex flex-row gap-[48px] text-white'>
                  <div className='w-[296px] h-[81px] flex flex-col gap-[8px]'>
                    <label className='w-[90px] h-[15px] font-bold text-[10px] text-[#E9BCB6] leading-[15px] tracking-[1px]'>FULL NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder='JOHN DOE'
                      required
                      className='w-[296px] h-[57px] px-[16px] py-[18px] bg-[#0E0E0E] border-1 border-[#5F3F3A]/20 transition-colors duration-200 focus:outline-none focus:border-[#E8000D]/60'
                    />
                  </div>
                  <div className='w-[296px] h-[81px] flex flex-col gap-[8px]'>
                    <label className='w-[90px] h-[15px] font-bold text-[10px] text-[#E9BCB6] leading-[15px] tracking-[1px]'>EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder='EMAIL@EXAMPLE.com'
                      required
                      className='w-[296px] h-[57px] px-[16px] py-[18px] bg-[#0E0E0E] border-1 border-[#5F3F3A]/15 transition-colors duration-200 focus:outline-none focus:border-[#E8000D]/60'
                    />
                  </div>
                </li>
                <li className='w-[616px] h-[81px] flex flex-row gap-[48px] text-white'>
                  <div className='w-[296px] h-[81px] flex flex-col gap-[8px]'>
                    <label className='w-[120px] h-[15px] font-bold text-[10px] text-[#E9BCB6] leading-[15px] tracking-[1px]'>PHONE NUMBER</label>
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder='(123) 456-7890'
                      className='w-[296px] h-[57px] px-[16px] py-[18px] bg-[#0E0E0E] border-1 border-[#5F3F3A]/15 transition-colors duration-200 focus:outline-none focus:border-[#E8000D]/60'
                    />
                  </div>
                  <div className='w-[296px] h-[81px] flex flex-col gap-[8px]'>
                    <label className='w-[90px] h-[15px] font-bold text-[10px] text-[#E9BCB6] leading-[15px] tracking-[1px]'>SUBJECT</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className='w-[296px] h-[57px] px-[16px] py-[18px] bg-[#0E0E0E] border-1 border-[#5F3F3A]/15 transition-colors duration-200 focus:outline-none focus:border-[#E8000D]/60'
                    >
                      <option value="">SELECT A SUBJECT</option>
                      <option value="general">GENERAL INQUIRY</option>
                      <option value="membership">MEMBERSHIP</option>
                      <option value="classes">CLASSES</option>
                    </select>
                  </div>
                </li>
                <li className='w-[616px] flex flex-row gap-[48px] text-white'>
                  <div className='w-full flex flex-col gap-[8px]'>
                    <label className='w-[120px] h-[15px] font-bold text-[10px] text-[#E9BCB6] leading-[15px] tracking-[1px]'>YOUR MESSAGE</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder='TELL US YOUR GOALS...'
                      required
                      className="w-[640.67px] h-[154px] rounded-[4px] border-[1px] border-[#5F3F3A]/15 px-[16px] pt-[16px] bg-[#0E0E0E] overflow-hidden resize-none transition-colors duration-200 focus:outline-none focus:border-[#E8000D]/60"
                    />
                  </div>
                </li>

                {/* ── Message de statut ── */}
                {status === 'success' && (
                  <p className='text-green-400 text-[13px] font-bold tracking-wide'>✅ MESSAGE SENT SUCCESSFULLY!</p>
                )}
                {status === 'error' && (
                  <p className='text-[#E8000D] text-[13px] mb-2 font-bold tracking-wide'>❌ SOMETHING WENT WRONG. TRY AGAIN.</p>
                )}

                <li className="w-[616.67px] h-[68px] opacity-100 rounded-[4px] py-[20px] ">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-[640px] h-[68px] rounded-[4px] py-[20px] bg-gradient-to-r from-[#FFB4A9] to-[#E8000D] text-white font-bold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed relative bottom-8"
                  >
                    {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </li>
              </ul>
            </form>
    </>
  )
}
