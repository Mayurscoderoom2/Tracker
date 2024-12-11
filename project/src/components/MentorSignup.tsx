import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MentorSignup } from '../types/auth';

const schema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(2, 'Last name is required'),
  gender: z.enum(['male', 'female', 'other']),
  subjects: z.array(z.string()).min(1, 'At least one subject is required'),
  experience: z.string().min(1, 'Experience is required'),
  city: z.string().min(2, 'City is required'),
  email: z.string().email('Invalid email address'),
  username: z.string().min(4, 'Username must be at least 4 characters'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
});

const MentorSignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<MentorSignup>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: MentorSignup) => {
    console.log(data);
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Mentor Registration</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                {...register('firstName')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Middle Name</label>
              <input
                type="text"
                {...register('middleName')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                {...register('lastName')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                {...register('gender')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                {...register('city')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subjects (comma-separated)</label>
            <input
              type="text"
              {...register('subjects')}
              placeholder="e.g., Mathematics, Physics, Chemistry"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.subjects && <p className="text-red-500 text-sm mt-1">{errors.subjects.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Experience (in years)</label>
            <input
              type="text"
              {...register('experience')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register('email')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                {...register('username')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register('password')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MentorSignupForm;