import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramEmbedPic = ({ linkCode }: { linkCode: string }) => {
  return (
    <blockquote
      className='instagram-media'
      data-instgrm-permalink={`https://www.instagram.com/p/${linkCode}/?utm_source=ig_embed&amp;utm_campaign=loading`}
      data-instgrm-version='14'
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px',
        maxWidth: '540px',
        minWidth: '326px',
        padding: 0,
        width: '99.375%',
      }}
    >
      <div style={{ padding: '16px' }}>
        <a
          href={`https://www.instagram.com/p/${linkCode}/?utm_source=ig_embed&amp;utm_campaign=loading`}
          style={{
            background: '#FFFFFF',
            lineHeight: 0,
            padding: 0,
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%',
          }}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: '#F4F4F4',
                borderRadius: '50%',
                flexGrow: 0,
                height: '40px',
                marginRight: '14px',
                width: '40px',
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '4px',
                  flexGrow: 0,
                  height: '14px',
                  marginBottom: '6px',
                  width: '100px',
                }}
              ></div>
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '4px',
                  flexGrow: 0,
                  height: '14px',
                  width: '60px',
                }}
              ></div>
            </div>
          </div>
          <div style={{ padding: '19% 0' }}></div>
          <div
            style={{
              display: 'block',
              height: '50px',
              margin: '0 auto 12px',
              width: '50px',
            }}
          >
            <FaInstagram size={50} color='#000' />
          </div>
          <div style={{ paddingTop: '8px' }}>
            <div
              style={{
                color: '#3897f0',
                fontFamily: 'Arial,sans-serif',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 550,
                lineHeight: '18px',
              }}
            >
              Ver essa foto no Instagram
            </div>
          </div>
          <div style={{ padding: '12.5% 0' }}></div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '14px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '50%',
                  height: '12.5px',
                  width: '12.5px',
                  transform: 'translateX(0px) translateY(7px)',
                }}
              ></div>
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  height: '12.5px',
                  transform: 'rotate(-45deg) translateX(3px) translateY(1px)',
                  width: '12.5px',
                  flexGrow: 0,
                  marginRight: '14px',
                  marginLeft: '2px',
                }}
              ></div>
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '50%',
                  height: '12.5px',
                  width: '12.5px',
                  transform: 'translateX(9px) translateY(-18px)',
                }}
              ></div>
            </div>
            <div style={{ marginLeft: '8px' }}>
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '50%',
                  flexGrow: 0,
                  height: '20px',
                  width: '20px',
                }}
              ></div>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '2px solid transparent',
                  borderLeft: '6px solid #f4f4f4',
                  borderBottom: '2px solid transparent',
                  transform: 'translateX(16px) translateY(-4px) rotate(30deg)',
                }}
              ></div>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <div
                style={{
                  width: '0px',
                  borderTop: '8px solid #F4F4F4',
                  borderRight: '8px solid transparent',
                  transform: 'translateY(16px)',
                }}
              ></div>
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  flexGrow: 0,
                  height: '12px',
                  width: '16px',
                  transform: 'translateY(-4px)',
                }}
              ></div>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '8px solid #F4F4F4',
                  borderLeft: '8px solid transparent',
                  transform: 'translateY(-4px) translateX(8px)',
                }}
              ></div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                backgroundColor: '#F4F4F4',
                borderRadius: '4px',
                flexGrow: 0,
                height: '14px',
                marginBottom: '6px',
                width: '224px',
              }}
            ></div>
            <div
              style={{
                backgroundColor: '#F4F4F4',
                borderRadius: '4px',
                flexGrow: 0,
                height: '14px',
                width: '144px',
              }}
            ></div>
          </div>
        </a>
        <p
          style={{
            color: '#c9c8cd',
            fontFamily: 'Arial,sans-serif',
            fontSize: '14px',
            lineHeight: '17px',
            marginBottom: 0,
            marginTop: '8px',
            overflow: 'hidden',
            padding: '8px 0 7px',
            textAlign: 'center',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <a
            href={`https://www.instagram.com/p/${linkCode}/?utm_source=ig_embed&amp;utm_campaign=loading`}
            style={{
              color: '#c9c8cd',
              fontFamily: 'Arial,sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 'normal',
              lineHeight: '17px',
              textDecoration: 'none',
            }}
            target='_blank'
            rel='noopener noreferrer'
          >
            Uma publicação compartilhada por Educandário Ler e Aprender
            (@educandariolereaprender)
          </a>
        </p>
      </div>
    </blockquote>
  );
};

export default InstagramEmbedPic;
