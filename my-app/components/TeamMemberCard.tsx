import React from 'react';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import { Member } from '@/data/teamMembers';


const TeamMemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <div className="p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full min-h-[500px]">
        <div className="w-full flex justify-center mb-4 rounded-4xl">
          <Image
            src={member.image}
            alt={member.name}
            width={150}
            height={150}
            className="rounded-full aspect-square object-cover"
          />
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
          <p className="text-lg text-gray-600 mb-4">{member.description}</p>
          <div className="flex items-center justify-center gap-2 text-gray-700 mb-2">
            <Mail className="w-5 h-5 text-black" />
            <a href={`mailto:${member.email}`} className="hover:text-black">{member.email}</a>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Phone className="w-5 h-5 text-black" />
            <a href={`tel:${member.phone}`} className="hover:text-black">{member.phone}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
